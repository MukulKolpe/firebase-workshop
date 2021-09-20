import { storage } from "./config.js";

document.getElementById("fileUpload").onchange = uploadFile;

function uploadFile() {
  var file = document.getElementById("fileUpload").files;
  console.log(file);
  const storeageref = storage.ref();
  const upload = storeageref.child("video/" + file[0].name);
  const task = upload.put(file[0]);

  task.then(function (snapshot) {
    snapshot.ref.getDownloadURL().then(function (url) {
      console.log("url:", url);
      document.getElementById("change").setAttribute("src", url);
    });
  });
}