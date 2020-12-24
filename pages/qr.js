import Navigation from '../Components/navigation'
import Layout from '../Components/layout'
import jsQR from "jsqr";
import { useState, useEffect } from 'react'
export default function QR(props) {

  const [output, setOutput] = useState("No QR code detected")

  useEffect(() => {
    var video = window.document.createElement("video");
    // var drawing = new Image();
    // drawing.src = "/.png";
    var canvasElement = window.document.getElementById("canvas");
    var canvas = canvasElement.getContext("2d");
    var loadingMessage = window.document.getElementById("loadingMessage");

    function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }

    // Use facingMode: environment to attemt to get the back camera on phones
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
        // frameRate: { ideal: 10, max: 15 }
      }
    }).then(function (stream) {
      video.srcObject = stream;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.play();
      requestAnimationFrame(tick);
    });

    function tick() {
      console.log('tick');
      loadingMessage.innerText = "⌛ Loading video..."
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        loadingMessage.hidden = true;
        canvasElement.hidden = false;

        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        if (code) {
          drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
          setOutput(code.data)
        }
      }
      requestAnimationFrame(tick);
    }
  }, [])


  return (
    <Layout>
      <Navigation selected='/projects' />
      <main className={"flex mx-6 my-24 items-center"}>

        <div className={''}>
          <div id="loadingMessage">🎥 Unable to access video stream (please make sure you have a webcam enabled)</div>
          <canvas id="canvas" hidden></canvas>
          <div id="output" >
            <div><b>Output: </b><br /><span>{output}</span></div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

