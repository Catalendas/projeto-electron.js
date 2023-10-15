import { Menu, Tray, nativeImage, BrowserWindow } from "electron"
import path from "path"

export function createTray(window: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.join(__dirname, "../../resources/rotionTemplate.png")
  )
  // console.log(__dirname)
  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: "Rotion", enabled: false},
    { type: "separator" },
    { label: "Criar novo documento",
      click: () => {
        window.webContents.send("new-document")
      }
    },
    { type: "separator" },
    { label: "Documentos recentes", enabled: false}

  ])

  tray.setContextMenu(menu)
}

