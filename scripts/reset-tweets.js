require("dotenv").config()
const { store, firebaseAdmin } = require("../src/lib/firebase-admin")

;(async () => {
  const doc = store.doc("main/tweets")
  const data = (await doc.get()).data()
  const filtered = {}
  for (const [id, metadata] of Object.entries(data)) {
    if (!metadata.postedAt)
      filtered[id] = firebaseAdmin.firestore.FieldValue.delete()
  }
  doc.update(filtered)
})()