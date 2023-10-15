import { ipcMain } from "electron";
import { randomUUID } from "crypto";
import { IPC } from "../shared/constants/ipc";
import { CreateDocumentResponse, DeleteDocumentRequest, Document, FetchAllDocumentsResponse, FetchDocumentRequest, FetchDocumentResponse, SaveDocumentRequest } from "../shared/typess/ipc";
import { store } from "./store";

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
  return {
    data: Object.values(store.get("document"))
  }
})

ipcMain.handle(IPC.DOCUMENTS.FETCH,
  async (_, { id }: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    const document = store.get(`document.${id}`) as Document

  return {
    data: document
  }
})

ipcMain.handle(IPC.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    const id = randomUUID()

    const document: Document = {
      id,
      title: "Untitled",
    }

    store.set(`document.${id}`, document)

  return {
    data: document
  }
})

ipcMain.handle(IPC.DOCUMENTS.SAVE,
  async (_, { id, title, content }: SaveDocumentRequest): Promise<void> => {
    store.set(`document.${id}`, {
      id,
      title,
      content
    })
  },
)

ipcMain.handle(IPC.DOCUMENTS.DELETE,
  async (_, { id }: DeleteDocumentRequest): Promise<void> => {
    // @ts-ignore
    store.delete(`document.${id}`)
  }
)
