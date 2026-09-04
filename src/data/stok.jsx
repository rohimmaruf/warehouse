import { Droplet, Keyboard, Mouse, Package, PackageOpen } from "lucide-react"


const stok = [
    {
        id: 1,
        nama: "Mouse Logitech",
        kategori: "Elektronik",
        lokasi: "Rak A1",
        stok: 5,
        minimum: 10,
        icon: Mouse,
    },
    {
        id: 2,
        nama: "Keyboard Wireless",
        kategori: "Elektronik",
        lokasi: "Rak A2",
        stok: 3,
        minimum: 8,
        icon: Keyboard,
    },
    {
        id: 3,
        nama: "Kertas A4 70gr",
        kategori: "ATK",
        lokasi: "Rak B1",
        stok: 2,
        minimum: 10,
        icon: PackageOpen,
    },
    {
        id: 4,
        nama: "Tinta Printer Epson",
        kategori: "ATK",
        lokasi: "Rak B2",
        stok: 4,
        minimum: 6,
        icon: Droplet,
    },
]

export default stok