# 349-HW5

This uses firebase functions to securely hide my access tokens without making submissions to the DB anonymous.  They are hosted on firebase for free and are invoked using HTTP requests using express. From there the Firestore DB is accessed, making it so none of the Firestore code is available to the client side browser.
