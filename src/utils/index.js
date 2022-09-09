import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBasket } from "react-icons/bs";
const Filters = [
  {
    id: 1,
    title: "color",
    list: [
      {
        value: "",
        label: "allCollors",
      },
      {
        value: "yellow",
        label: "yellow",
      },
      {
        value: "Siyah",
        label: "black",
      },
      {
        value: "Kırmızı",
        label: "red",
      },
      {
        value: "Penbe",
        label: "pink",
      },
      {
        value: "Gri",
        label: "gray",
      },
    ],
  },
  {
    id: 2,
    title: "sorting",
    list: [
      {
        value: false,
        label: "lowestPrice",
      },
      {
        value: true,
        label: "highestPrice",
      },
      {
        value: "(A>Z)",
        label: "newestsa",
      },
      {
        value: "(Z>A)",
        label: "newestsz",
      },
    ],
  },
  {
    id: 3,
    title: "brands",
    list: [
      {
        value: "",
        label: "allBrands",
      },
      {
        value: "samsung",
        label: "Samsung",
      },
      {
        value: "nokia",
        label: "Nokia",
      },
      {
        value: "Apple",
        label: "Apple",
      },
      {
        value: "lg",
        label: "LG",
      },
      {
        value: "huawei",
        label: "Huawei",
      },
      {
        value: "xiaomi",
        label: "Xiaomi",
      },
      {
        value: "general Mobile",
        label: "General Mobile",
      },
    ],
  },
];

const Products = [
  {
    id: 7,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 111,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 313,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 1653,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },
  {
    id: 17,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 311,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 32123,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },
  {
    id: 4337,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 141,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 43,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },

  {
    id: 432,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 4322,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 1423,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 54,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },

  {
    id: 745,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 345,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 645,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 213,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },

  {
    id: 546,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 876876,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 324,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 65,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },

  {
    id: 5437,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 15433,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 12343,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },

  {
    id: 2137,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
    color: "Beyaz",
    price: 2762,
    croseRate: 5,
    stock: 1,
    brand: "Apple",
    image: "/assets/image/products/product1.png",
  },

  {
    id: 6546,
    title: "Apple iPhone 11",
    color: "Siyah",
    price: 8149,
    croseRate: 25,
    stock: 10,
    brand: "Apple",
    image: "/assets/image/products/product2.png",
  },
  {
    id: 213,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 534,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },

  {
    id: 1543,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 40,
    brand: "Apple",
    image: "/assets/image/products/product3.png",
  },

  {
    id: 21313,
    title: "Apple Telefon",
    color: "Beyaz",
    price: 8331,
    croseRate: 0,
    stock: 50,
    brand: "Apple",
    image: "/assets/image/products/product4.png",
  },
];

const Menus = [
  {
    id: 1,
    label: "Ana Sayfa",
    href: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    label: "Hakkımızda",
    href: "/",
    icon: <SiAboutdotme />,
  },
  {
    id: 3,
    label: "Haberler",
    href: "/",
    icon: <HiOutlineNewspaper />,
  },
  {
    id: 4,
    label: "Siparişlerim",
    href: "/",
    icon: <BsBasket />,
  },
  {
    id: 5,
    label: "İletişim",
    href: "/",
    icon: <BiHelpCircle />,
  },
];

const Languages = [
  {
    label: "Türkçe",
    value: "tr",
  },
  {
    label: "İngilizce",
    value: "en",
  },
];

const Banners = [
  {
    href: "https://www.hepsiburada.com/kampanyalar/yeni-xiaomi-10c-lansmana-ozel-akilli-bileklik-hediyeli",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220824112044.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/alcatel-1066g-alcatel-turkiye-garantili-p-HBCV00002LH8GA",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220907161439.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/kampanyalar/secili-vivo-telefonlarda-400-tl-kirtasiye-ceki-hediye",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220907102215.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/kampanyalar/eski-telefonunu-ek-indirimlerle-yenile",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220905162611.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/staticpage/1100485238440325",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220818135925.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/kampanyalar/secili-telefonlarda-hepsipay-ile-12-ay-odeme-kolayligi",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220811131248.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/reeder-p13-blue-max-20…iye-garantili-p-HBCV000020CVTY?magaza=Hepsiburada",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220901132957.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/kampanyalar/yeni-xiaom…12-lite-lansmana-ozel-bluetooth-kulaklik-hediyeli",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220824152100.jpeg",
  },
  {
    href: "https://www.hepsiburada.com/kampanyalar/en-favori-fiyat-performans-telefonlarinda-super-fiyatlar",
    image:
      "https://images.hepsiburada.net/banners/0/banner_20220805161655.jpeg",
  },
];

const Brands = [
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20220720122216.png",
    label: "Arzum",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20210928192001.png/format:webp",
    label: "Dyson",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20210928192813.png/format:webp",
    label: "Vestel",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20211216124000.png/format:webp",
    label: "Samsung",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20220418153933.png/format:webp",
    label: "Regal",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20211209164550.png/format:webp",
    label: "Honor",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20220705121140.jpeg/format:webp",
    label: "Karaca",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20210107021619.png/format:webp",
    label: "Apple",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20210406182558.png/format:webp",
    label: "Braun",
  },
  {
    image:
      "https://images.hepsiburada.net/banners/s/0/128-80/featurelist_68_20211216113720.png/format:webp",
    label: "Defacto",
  },
];

export { Filters, Products, Menus, Languages, Banners, Brands };
