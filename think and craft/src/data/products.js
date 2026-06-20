const products = [
{
id:1,
nameAr:"خشب بلوط",
nameEn:"Oak Wood",
price:80,
category:"wood",
image:"https://i.ibb.co/1JP0ncxW/oak-wood-png.png"
},

{
id:2,
nameAr:"لوح خشب زان",
nameEn:"Beech Wood Board",
price:70,
category:"wood",
image:"https://i.ibb.co/wZrpvKbm/beech-wood-board-png.png"
},

{
id:3,
nameAr:"لوح خشب صنوبر",
nameEn:"Pine Wood Board",
price:45,
category:"wood",
image:"https://i.ibb.co/wN16K0pX/pine-wood-board-png.png"
},

{
id:4,
nameAr:"لوح خشب جوز فاخر",
nameEn:"Premium Walnut Board",
price:120,
category:"wood",
image:"https://i.ibb.co/3YNLY9ct/premium-walnut-wood-board-png.png"
},

{
id:5,
nameAr:"ألواح MDF",
nameEn:"MDF Boards",
price:35,
category:"wood",
image:"https://i.ibb.co/2D9nHkf/MDF-mdf-boards-png.png"
},

{
id:6,
nameAr:"منشار يدوي",
nameEn:"Hand Saw",
price:35,
category:"tools",
image:"https://i.ibb.co/TMpGkkjB/hand-saw-png.png"
},

{
id:7,
nameAr:"مطرقة نجارة",
nameEn:"Carpenter Hammer",
price:25,
category:"tools",
image:"https://i.ibb.co/ZRSysQnK/hammer-png.png"
},

{
id:8,
nameAr:"مفك براغي متعدد",
nameEn:"Multi Screwdriver",
price:40,
category:"tools",
image:"https://i.ibb.co/nM08R1dK/screwdriver-png.png"
},

{
id:9,
nameAr:"كماشة",
nameEn:"Pliers",
price:30,
category:"tools",
image:"https://i.ibb.co/yc3KgQx8/pliers-png.png"
},

{
id:10,
nameAr:"شريط قياس",
nameEn:"Measuring Tape",
price:20,
category:"tools",
image:"https://i.ibb.co/vvDfRJGm/measuring-tape-png.png"
},

{
id:11,
nameAr:"ميزان ماء",
nameEn:"Spirit Level",
price:25,
category:"tools",
image:"https://i.ibb.co/PsM0cGpm/spirit-level-png.png"
},

{
id:12,
nameAr:"مثقاب كهربائي (دريل)",
nameEn:"Electric Drill",
price:180,
category:"electric",
image:"https://i.ibb.co/SwV1MWS9/electric-drill-png.png"
},

{
id:13,
nameAr:"منشار دائري كهربائي",
nameEn:"Circular Saw",
price:250,
category:"electric",
image:"https://i.ibb.co/xS1VSk9d/circular-saw-png.png"
},
{
id:14,
nameAr:"صنفرة كهربائية",
nameEn:"Electric Sander",
price:200,
category:"electric",
image:"https://i.ibb.co/TxqLsMVv/electric-sander-png.png"
},

{
id:15,
nameAr:"مسدس غراء حراري",
nameEn:"Hot Glue Gun",
price:35,
category:"electric",
image:"https://i.ibb.co/wFvLGKmM/hot-glue-gun-png.png"
},

{
id:16,
nameAr:"علبة مسامير خشب",
nameEn:"Wood Screws Box",
price:20,
category:"hardware",
image:"https://i.ibb.co/PGfhVSpn/wood-screws-box-png.png"
},

{
id:17,
nameAr:"علبة براغي معدنية",
nameEn:"Metal Screws Box",
price:25,
category:"hardware",
image:"https://i.ibb.co/k66mmMYt/metal-screws-box-png.png"
},

{
id:18,
nameAr:"مسامير صغيرة",
nameEn:"Small Nails",
price:15,
category:"hardware",
image:"https://i.ibb.co/d0DDTPZK/small-nails-png.png"
},

{
id:19,
nameAr:"مفصلات أبواب",
nameEn:"Door Hinges",
price:30,
category:"hardware",
image:"https://i.ibb.co/vxr2T1z3/door-hinges-png.png"
},

{
id:20,
nameAr:"مقابض أثاث خشبية",
nameEn:"Wooden Furniture Handles",
price:35,
category:"hardware",
image:"https://i.ibb.co/x8YTrbjF/wooden-furniture-handles-png.png"
},

{
id:21,
nameAr:"غراء خشب",
nameEn:"Wood Glue",
price:25,
category:"finishing",
image:"https://i.ibb.co/twdRd3Wf/wood-glue-png.png"
},

{
id:22,
nameAr:"ورق صنفرة",
nameEn:"Sandpaper",
price:15,
category:"finishing",
image:"https://i.ibb.co/C5ypwWQT/sandpaper-png.png"
},

{
id:23,
nameAr:"ورنيش خشب",
nameEn:"Wood Varnish",
price:40,
category:"finishing",
image:"https://i.ibb.co/Fb5X35sQ/wood-varnish-png.png"
},

{
id:24,
nameAr:"دهان خشب",
nameEn:"Wood Paint",
price:50,
category:"finishing",
image:"https://i.ibb.co/390Mr4T6/wood-paint-png.png"
},

{
id:25,
nameAr:"رؤوس حفر خشب",
nameEn:"Wood Drill Bits",
price:35,
category:"tools",
image:"https://i.ibb.co/PGkqPr6H/wood-drill-bits-png.png"
},

{
id:26,
nameAr:"كمامة غبار",
nameEn:"Dust Mask",
price:10,
category:"safety",
image:"https://i.ibb.co/Qv62hvLz/dust-mask-png.png"
},
{
id:27,
nameAr:"قفاز عمل",
nameEn:"Work Gloves",
price:15,
category:"safety",
image:"https://i.ibb.co/zWn9Yxym/work-glove-png.png"
},

{
id:28,
nameAr:"نظارة حماية",
nameEn:"Safety Glasses",
price:20,
category:"safety",
image:"https://i.ibb.co/JR3ZfpQS/safety-glasses-png.png"
},

{
id:29,
nameAr:"صندوق أدوات",
nameEn:"Tool Box",
price:60,
category:"tools",
image:"https://i.ibb.co/5W2W3d06/tool-box-png.png"
},

{
id:30,
nameAr:"مشابك تثبيت خشب",
nameEn:"Wood Clamps",
price:30,
category:"tools",
image:"https://i.ibb.co/6c1PW88z/wood-clamps-png.png"
},

{
id:31,
nameAr:"أزميل نجارة",
nameEn:"Woodworking Chisel",
price:35,
category:"tools",
image:"https://i.ibb.co/TxqLsMVv/woodworking-chisel-png.png"
},

{
id:32,
nameAr:"مبرد خشب",
nameEn:"Wood File",
price:25,
category:"tools",
image:"https://i.ibb.co/nGSj13x/wood-file-png.png"
},

{
id:33,
nameAr:"طاولة عمل نجارة",
nameEn:"Woodworking Workbench",
price:300,
category:"wood",
image:"https://i.ibb.co/KjdYbd57/woodworking-workbench-png.png"
},

{
id:34,
nameAr:"كرسي خشبي",
nameEn:"Wooden Chair",
price:120,
category:"wood",
image:"https://i.ibb.co/qMP6X977/wooden-chair-png.png"
},

{
id:35,
nameAr:"رف خشبي",
nameEn:"Wooden Shelf",
price:90,
category:"wood",
image:"https://i.ibb.co/5hpXBvSH/wooden-shelf-png.png"
},

{
id:36,
nameAr:"إطار صور خشبي",
nameEn:"Wooden Picture Frame",
price:45,
category:"wood",
image:"https://i.ibb.co/QFK8440p/wooden-picture-frame-png.png"
},

{
id:37,
nameAr:"طقم نحت خشبي",
nameEn:"Wood Carving Set",
price:100,
category:"tools",
image:"https://i.ibb.co/yTkRnzG/wood-carving-set-png.png"
},

{
id:38,
nameAr:"عدة نجارة كاملة",
nameEn:"Complete Woodworking Tool Set",
price:500,
category:"tools",
image:"https://i.ibb.co/tP2C81xq/complete-woodworking-tools-set-png.png"
},

{
id:39,
nameAr:"طقم أدوات صغيرة",
nameEn:"Small Tools Set",
price:80,
category:"tools",
image:"https://i.ibb.co/5gFcHmXV/small-tools-set-png.png"
}

];

export default products;