/**
 * To use it in IDC put https://github.com/giuseppelanzi/cordova-plugin-mlkit-barcode-scanner in the "parameters" value of app.device.mlkitbarcodescanner
 * 
 * IMPORTANT: copy this file inside an empty plugin resource (do not upload directly in the project).
 */

var Plugin = Plugin || {};

/**
 * @class MLKitBarcodeScanner
 * @param {app.shellEmulator} shellEmulator - shellEmulator object
 * */
Plugin.MLKitBarcodeScanner = {}

Plugin.MLKitBarcodeScanner.init = function () {
  //
};

/**
 * Scans a code and returns to the idc app.
 * IDC app remains idle until the scan is confirmed / canceled, both conditions lead to the callback.
 * @param {Object} req - request object
 */
Plugin.MLKitBarcodeScanner.scan = function (req)
{
  try {
    cordova.plugins.mlkit.barcodeScanner.scan(req.params.options,
      function (result)  {
        req.setResult(result); 
      },
      function (error) { 
        req.setError(error); 
      }
    );
  }
  catch (ex) {
    req.setError(ex.message || ex);
  }
};