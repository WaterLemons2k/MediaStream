/**
 * https://developer.mozilla.org/docs/Web/API/Media_Capture_and_Streams_API/Constraints
 * https://developer.mozilla.org/docs/Web/API/MediaTrackConstraints
 */

// @ts-check
'use strict';

/** @type {MediaStreamConstraints} */
const constraints = {
  audio: {
    sampleRate: -1 // the best rate
  },
  video: {
    width: -1 // the best resolution
  }
};

async function main() {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);

  const video = document.querySelector('video');
  if (!video) throw new Error('no <video>');
  video.srcObject = stream;
}
main().catch(alert);
