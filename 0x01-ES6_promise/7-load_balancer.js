export default function loadBalancer(chinaDownload, USDownload) {
  return promise.race([chinaDownload, USDownload])
    .then((value) => value);
}
