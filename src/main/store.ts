import Store from "electron-store"
import { Document } from "../shared/typess/ipc"

interface StoreType {
  document: Record<string, Document>
}

export const store = new Store<StoreType>({
  defaults: {
    document: {}
  }
})

// console.log(store.path)
