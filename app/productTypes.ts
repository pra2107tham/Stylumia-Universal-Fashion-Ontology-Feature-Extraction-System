export interface Product {
  productID: string;
  productName: string;
  description: string;
  mrp: number;
  pdp_url: string;
  feature_image: string;
  feature_image_s3: string;
  channel_id: number;
  feature_list: string[];
  meta_info: string;
  category: string;
}

export interface Category {
  name: string;
  attributes: string[];
}

export const categories: Category[] = [
  { name: "Watches", attributes: ["Calendar Type", "Date First Available", "Part Number", "Band Colour", "ASIN", "Dial Colour", "Product Dimensions", "Bezel Function", "Special Features", "Case Thickness", "Department", "Display Type", "Warranty Type", "Manufacturer", "Net Quantity", "Case Material", "Importer", "Crystal Material", "Movement", "Warranty", "Item Model Number", "Model Number", "Generic Name", "Band Size", "Packer", "Case Diameter", "Brand", "Case Shape", "Bezel Material", "Band Material", "Clasp", "Band Width", "Item Dimensions (LxWxH)", "Country of Origin", "Item Weight"] },
  { name: "T-Shirts", attributes: ["Fit", "Care Instructions", "Composition", "Sleeve Length", "Neckline", "Length", "Imported", "Detailed Description", "Model Size", "Material"] },
  { name: "Kurtis", attributes: ["Supplier Information"] },
  { name: "Dresses", attributes: ["Care Instructions", "Composition", "Description", "Sleeve Length", "Size", "Material", "Fit", "Country of Production", "Price (MRP)", "Date of Manufacture", "Length", "Additional Material Information", "Style", "Common Generic Name", "Net Quantity", "Date of Import"] },
  { name: "Earrings", attributes: ["Size & Fit", "Details & Care"] },
  { name: "Jeans", attributes: ["Composition", "Color", "Goods SN", "Material", "Waist Line", "Type", "Details", "Fit Type", "Care Instructions", "Lined for Added Warmth", "Belt", "Length", "Pattern Type", "Features", "Closure Type", "Pockets", "Fabric", "Sheer"] },
  { name: "Sarees", attributes: [] },
  { name: "Sneakers", attributes: ["Sole Material", "Pattern", "Toe Shape", "Occasion", "Material & Care", "BIS Certificate Image URL", "BIS Expiry Date", "Micro Trend", "Material", "Insole", "Type", "Fastening", "Seller Name", "BIS Certificate Number", "Shoe Width", "Ankle Height", "Sustainable", "Number of Items", "Package Contains"] },
  { name: "Bathroom Vanities", attributes: ["Top Material", "Vanity Features", "Top Color", "Assembled", "Sink Color", "Product Depth (in.)", "Faucet Included", "Number of Shelves Included in Cabinet", "Mirror Height (in.)", "Cabinet Color", "Internet Sku", "Cabinet Color Family", "Top Color Family", "Basin Depth (in.)", "Cabinet Shade", "Top weight (lb.)", "Sink Color Family", "Number of Sinks", "Manufacturer Warranty", "Vanity Top Thickness (in.)", "Hardware Finish Family", "Style", "Sink Type", "Sink Material", "Basin Length (in.)", "Mirror Width (in.)", "Backsplash Height (in.)", "Cabinet Width (in.)", "Cabinet & Top Assembled weight (lbs)", "Mirror Features", "Returnable", "Vanity Top Edge Type", "Sink Location", "Cabinet Height (in.)", "Product Width (in.)", "Included", "Cabinet Material", "Backsplash Included", "Vanity Type", "Cabinet Depth (in.)", "Store Sku", "Sink Shape", "Mirror Included", "Faucet Hole Spacing (in.)", "Number of Drawers", "Model", "Basin Width (in.)", "Product Height (in.)"] },
  { name: "Shirts", attributes: ["Composition", "Sleeve Length", "Neckline", "Color", "Sleeve Type", "Goods SN", "Material", "Hem Shaped", "Type", "Details", "Fit Type", "Care Instructions", "Length", "Pattern Type", "Style", "Fabric", "Placket", "Sheer"] },
];

export const sampleProducts: Product[] = [
  {
    productID: "a25e16a3d2a1edaad6db2f490c7f6098557b0721dad5ccfb98b26034c6d5c823",
    productName: "Miranda 54 in. W x 22 in. D x 33.75 in. H Single Bath Vanity in Dark Gray with White Quartz Top",
    description: "Sleek and chic are the best words to describe this European shaker vanity, a piece that bridges modern and contemporary. The Miranda vanity is manufactured in high quality durable materials and finished to the exacting standards you've come to expect from the Wyndham Collection. With function as important as form, the elegant design focuses on ample storage and counter space, a choice of several different handle colors, and 3D adjustable soft-close doors and dovetail drawers.",
    mrp: 158048,
    pdp_url: "https://www.homedepot.com/p/Wyndham-Collection-Miranda-54-in-W-x-22-in-D-x-33-75-in-H-Single-Bath-Vanity-in-Dark-Gray-with-White-Quartz-Top-WCF292954SGBWQUNSMXX/327827489",
    feature_image: "https://images.thdstatic.com/productImages/8c193ff4-35d7-4225-ad2e-65cd7c0d9943/svn/wyndham-collection-bathroom-vanities-with-tops-wcf292954sgbwqunsmxx-64_1000.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/11/68/20a7594957212460cf7f3a73b1efde8d856cd24b48f744433966c9def401726f.jpg",
    channel_id: 68,
    feature_list: [
      "Miranda 54 in bathroom vanity with white quartz top",
      "Features 2 doors, 6 drawers, and generous storage space",
      "Backsplash and sidesplash included; faucet not included",
      "Constructed of environmentally friendly 0-emissions plywood and veneer",
      "Fully extending undermount 3D adjustable soft-close drawer slides",
      "Deep dovetailed drawer(s)",
      "Concealed soft-close door hinges",
      "Backsplash comes in 2-pieces",
      "Faucet(s) not included",
      "2-functional doors, 6-functional drawers",
      "Plenty of storage and counter space",
      "2-year limited warranty"
    ],
    meta_info: "Quartz Top Material Adjustable Hinges,Adjustable Shelves,Concealed Hinges,Concealed Shelves,Dovetail Drawer Construction,Fully Extendable Drawers,Predrilled,Prefinished,Soft Close Doors,Soft Close Drawers,Toe Kick Vanity Features White Quartz Top Color Unassembled Assembled White Sink Color 22 in Product Depth (in.) Faucet Not Included Faucet Included 1 Number of Shelves Included in Cabinet Dark Gray with Matte Black Trim Cabinet Color 327827489 Internet Sku Gray Cabinet Color Family White Top Color Family 6 Basin Depth (in.) Dark Cabinet Shade 104 Top weight (lb.) White Sink Color Family Single Sink Number of Sinks 2 year limited warranty Manufacturer Warranty 0.75 Vanity Top Thickness (in.) Black Hardware Finish Family Modern Style Undermount Porcelain Sink Material 11.75 Basin Length (in.) 3 Backsplash Height (in.) 53.25 Cabinet Width (in.) 307 Cabinet & Top Assembled weight (lbs) 90-Day Returnable Straight Center Sink Location 33.00 Cabinet Height (in.) 54 in Product Width (in.) Drawers,Pull Handle(s) Included Plywood Cabinet Material Backsplash Included Backsplash Included Freestanding 21.75 Cabinet Depth (in.) 1010525940 Store Sku Rectangular Sink Shape Mirror Not Included Mirror Included Single Hole Faucet Hole Spacing (in.) 6 Number of Drawers Assembly Required WCF292954SGBWQUNSMXX Model 18 Basin Width (in.) 33.75 in Product Height (in.)",
    category: "Bathroom Vanities"
  },
  {
    productID: "b770a4457800df8e119cc38a2a5f5b373dcce0d2fbcd3e20c1e771ef3702fed2",
    productName: "Women's Printed Rayon Long Anarkali Kurti",
    description: "Beautiful printed kurta",
    mrp: 1413,
    pdp_url: "https://www.meesho.com/womens-printed-rayon-long-anarkali-kurti/p/3458o",
    feature_image: "https://images.meesho.com/images/products/5232264/tzsnh.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/10/401/b770a4457800df8e119cc38a2a5f5b373dcce0d2fbcd3e20c1e771ef3702fed2.jpg",
    channel_id: 401,
    feature_list: [],
    meta_info: "ROHIKA CRAFTS Supplier Information",
    category: "Kurtis"
  },
  {
    productID: "cf182170fecb4d8ed5ddb575a7fb6ed41bca5166b74391b1c82a24194a27c6dd",
    productName: "SHEIN SXY Elegant Lace Print Ruched Crew Neck Long Sleeve Bodycon Dress For Women",
    description: "",
    mrp: 1673,
    pdp_url: "https://us.shein.com/SHEIN-SXY-Elegant-Lace-Print-Ruched-Crew-Neck-Long-Sleeve-Bodycon-Dress-For-Women-p-38526038-cat-1727.html",
    feature_image: "https://img.ltwebstatic.com/images3_pi/2024/07/12/71/172075165247d214670a5606e338ad6d1a1ddb3030.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/08/49/cf182170fecb4d8ed5ddb575a7fb6ed41bca5166b74391b1c82a24194a27c6dd.jpg",
    channel_id: 49,
    feature_list: [],
    meta_info: "100% Polyamide Composition Long Sleeve Sleeve Length Square Neck Neckline Black Color Regular Sleeve sz2406052231327530 goods_sn Knitted Fabric Material Pencil Hem Shaped Natural Waist Line Bodycon Sheer, Contrast Lace, Ruched Details Slim Fit Hand wash,do not dry clean Care Instructions Short Length Floral, Plants, All Over Print Sexy Style 100% Polyester Lining Medium Stretch Fabric Lined Body Semi-Sheer Sheer",
    category: "Dresses"
  },
  {
    productID: "1c9b547cd0776c3cf30a3685345f419a6511e43061dbf2276007809e3d678611",
    productName: "Fida Premium 14k Rhodium-Plated AAA American Diamond Pearls Drop Earrings",
    description: "",
    mrp: 5140,
    pdp_url: "https://www.myntra.com/earrings/fida/fida-premium-14k-rhodium-plated-aaa-american-diamond-pearls-drop-earrings/31409710/buy",
    feature_image: "http://assets.myntassets.com/assets/images/31409710/2024/11/6/e40da641-8c71-4b25-910a-d23d3fa3ab371730895035370-Fida-Crescent-Shaped-Chandbalis-Earrings-1481730895034924-1.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/11/8/1c9b547cd0776c3cf30a3685345f419a6511e43061dbf2276007809e3d678611.jpg",
    channel_id: 8,
    feature_list: [
      "Silver toned & white contemporary drop earrings, rhodium-plated, has american diamond",
      "Secured with a post and back closure"
    ],
    meta_info: "Contemporary Shape Post and Back Closure Single Multipack Set Western Occasion Material:Brass Plating: Rhodium Plated Stone type:American Diamond  Care Instructions:  Wipe your jewellery with a soft cloth after every use Always store your jewellery in a flat box to avoid accidental scratches Keep sprays and perfumes away from your jewellery Do not soak your jewellery in water Clean your jewellery using a soft brush Dipped in jewellery cleaning solution only Material & Care Length-7.5 cm, Width-3 cm Size & Fit Drop Earrings American Diamond TONIQ RETAIL BRANDS PRIVATE LIMITED seller_name Rhodium-Plated Plating Brass Base Metal 2 Number of Items 1 pair of chandbalis earrings Package Contains Silver toned & white contemporary drop earrings, rhodium-plated, has american diamond Secured with a post and back closure",
    category: "Earrings"
  },
  {
    productID: "ee61d6dabaa82dc07453683dbc2787c0c2f720f5e37e64856098fb6a0abacbbb",
    productName: "Light Blue Ripped Jeans Female Autumn Design Casual Boyfriend Style Straight Leg Loose Wide Leg Trousers Without Belt",
    description: "",
    mrp: 2328,
    pdp_url: "https://us.shein.com/Light-Blue-Ripped-Jeans-Female-Autumn-Design-Casual-Boyfriend-Style-Straight-Leg-Loose-Wide-Leg-Trousers-Without-Belt-p-41076766-cat-1934.html",
    feature_image: "https://img.ltwebstatic.com/images3_pi/2024/08/19/6c/1724040031bf340ec472093e83e02521d2707bd63e_wk_1724152870.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/11/49/ee61d6dabaa82dc07453683dbc2787c0c2f720f5e37e64856098fb6a0abacbbb.jpg",
    channel_id: 49,
    feature_list: [],
    meta_info: "86% Cotton, 8% Viscose, 6% Polyester Composition Light Wash Color sz2407198131510296 goods_sn Denim Material Natural Waist Line Straight Leg Pocket, Zipper Details Regular Fit Machine wash, do not dry clean Care Instructions Long Length Plain, All Over Print Casual Style Zipper Fly Non-Stretch Fabric Unlined Body",
    category: "Jeans"
  },
  {
    productID: "8dafe980ad74e44e1943f87bd79c034998a2098a694bb8213f931a2126772bf1",
    productName: "Womens Satin Silk Purple Embellished Designer Saree with Unstitched Blouse",
    description: "This saree from the house of Akhilam is made from Satin Silk and is Purple in color. Akhilam Ethnic Sarees comes With Blouse Piece, Which can be Stitched according to Your Taste and Preference. This Saree is Crafted by Skill Craftsmen without Compromising on its Quality. With This Beautiful Design and Fabric, This Saree will fetch You Oodles of Compliments and Praise. saree fit size is 5.5 mtr saree and 0.8 mtr blouse, Free Size |.",
    mrp: 18999,
    pdp_url: "https://www.nykaafashion.com/akhilam-womens-satin-silk-purple-embellished-designer-saree-with-unstitched/p/17275716",
    feature_image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/6/26422b5MAHEK749FMK_1.jpg?rnd=20200526195200",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/10/211/8dafe980ad74e44e1943f87bd79c034998a2098a694bb8213f931a2126772bf1.jpg",
    channel_id: 211,
    feature_list: [],
    meta_info: "Embellished/Sequined Pattern Dry Clean Care instructions Embellished/Sequined Responsible production Responsiblity Criteria Party Occasion Single Pack Size 1 Saree, 1 Unstitched Blouse Pack contains Aarsh Lifestyle Pvt Ltd, B-4024, Aashirwad Textile Market Surat, Gujarat 395010 Address of Manufacturer/ Packer/ Importer Aarsh Lifestyle Private Limited Sold By India Country of Origin Aarsh Lifestyle Pvt Ltd Name of Manufacturer/ Packer/ Importer",
    category: "Sarees"
  },
  {
    productID: "c5d396821bad2c646753d7e3c6439dd79d5e7c66034c113b1fefbd0ad57c61ae",
    productName: "Duke Men Round Toe Mesh Sneakers",
    description: "",
    mrp: 3995,
    pdp_url: "https://www.myntra.com/casual-shoes/duke/duke-men-round-toe-mesh-sneakers/29839357/buy",
    feature_image: "http://assets.myntassets.com/assets/images/29839357/2024/5/30/5b3e9d0a-bf77-4972-9a33-b57f43de2c3b1717069877755CasualShoes1.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/08/8/c5d396821bad2c646753d7e3c6439dd79d5e7c66034c113b1fefbd0ad57c61ae.jpg",
    channel_id: 8,
    feature_list: [
      "A pair of round toe brown sneakers ,has regular styling,",
      "Lace-ups detail",
      "Mesh upper",
      "Cushioned footbed",
      "Textured and patterned outsole",
      "Warranty: 1 month",
      "Warranty provided by brand/manufacturer"
    ],
    meta_info: "EVA Sole Material Solid Pattern Round Toe Toe Shape 1 month Warranty Everyday Occasion Mesh Wipe with a clean, dry cloth to remove dust Material & Care Basics Micro Trend Mesh Material Padded Insole Sneakers Lace-Ups Fastening Shoe Width Ankle Height 2 Number of Items 1 pair of shoes Package Contains https://assets.myntassets.com/assets/images/2024/8/23/5af2fa8a-384b-47d4-b054-5d9e3fb35d151724389764945-DECLARATION---SOR-MYNTRA-FOOTWEAR_page-0001.jpg BIS Certificate Image URL 31/07/2026 BIS Expiry Date 1234567 BIS Certificate Number Flashtech Retail seller_name A pair of round toe brown sneakers ,has regular styling, Lace-ups detail Mesh upper Cushioned footbed Textured and patterned outsole Warranty: 1 month Warranty provided by brand/manufacturer",
    category: "Sneakers"
  },
  {
    productID: "67a707c2013f396b044b233e79486e02b32991b9c98165761ec721f5181dd213",
    productName: "ROMWE Street Life Men s Fashion Letter Print Long Sleeve T Shirt Autumn",
    description: "",
    mrp: 1172,
    pdp_url: "https://us.shein.com/ROMWE-Street-Life-Men-s-Fashion-Letter-Print-Long-Sleeve-T-Shirt-Autumn-p-45116203-cat-1980.html",
    feature_image: "https://img.ltwebstatic.com/images3_pi/2024/11/05/f5/1730775962d81cc934f15c469e6ad3a86aef244f06.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/11/49/67a707c2013f396b044b233e79486e02b32991b9c98165761ec721f5181dd213.jpg",
    channel_id: 49,
    feature_list: [],
    meta_info: "95% Polyester, 5% Elastane Composition Spring/Fall (18-25℃/63-77℉) Temperature Long Sleeve Sleeve Length Round Neck Neckline Hot Pink Color Regular Sleeve sm2409288119021887 goods_sn Polyester Material Hem Shaped Regular Fit Machine wash or professional dry clean Care Instructions Length Colorblock, Letter Casual Style Slight Stretch Fabric",
    category: "T-Shirts"
  },
  {
    productID: "b71dad3df80f362c9b84f9cbac3d94125f73c8003050e20a0978d8494a05747a",
    productName: "Women Sheen Grey Dial Analog Watch - SHE-4554GY-5AUDF (M)",
    description: "Make a shimmering statement with a streamlined octagonal design in a metallic sheen.The flat bezel top with hairline finish and beveled case with mirror finish come together in a multi-faceted cut-and-polished gleam. The ion-plated case and band are complemented by a dial in matching color with a matte finish for the sharp, elegant look of a glimmering modern accessory.The scratch-resistant sapphire crystal delivers high transparency for an easy read, and the water resistance up to 50 meters frees you from worry when washing up or working with water.",
    mrp: 10995,
    pdp_url: "https://www.nykaafashion.com/casio-women-sheen-grey-dial-analog-watch-she-4554gy-5audf-m/p/18005245",
    feature_image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/e/de6e846SH317_1.jpg?rnd=20200526195200",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/11/211/b71dad3df80f362c9b84f9cbac3d94125f73c8003050e20a0978d8494a05747a.jpg",
    channel_id: 211,
    feature_list: [],
    meta_info: "Stainless Steel Strap Material Wipe With Clean Dry Cloth Care instructions 2 Years Warranty Octagon Shape Casual Occasion 1 Watch, 1 Case Pack contains SHE-4554GY-5AUDF Model number A-41, First Floor, Mathura Road, Mohan Cooperative Industrial Estate, New Delhi - 110044 Address of Manufacturer/ Packer/ Importer Bappa Associates Sold By Casio Name of Manufacturer/ Packer/ Importer Water Resistant Water Resistant 0.75 cm Case Thickness Analog Grey Strap Color Single Pack Size Grey Dial Color Stainless Steel Case Material China Country of Origin",
    category: "Watches"
  },
  {
    productID: "1d10d758a09cf42c1bafc6ea3300a06c9c3e7bebd12adc3e23bba98d4b378003",
    productName: "AMI Men s Heart Embroidered Logo Long Sleeve Shirt White",
    description: "",
    mrp: 26688,
    pdp_url: "https://us.shein.com/AMI-Men-s-Heart-Embroidered-Logo-Long-Sleeve-Shirt-White-p-42751273-cat-1979.html",
    feature_image: "https://img.ltwebstatic.com/images3_spmp/2024/09/13/dd/1726216560d377a90e907982b62045323b124db0d7_square.jpg",
    feature_image_s3: "https://assets.stylumia.com/originals/2024/09/49/1d10d758a09cf42c1bafc6ea3300a06c9c3e7bebd12adc3e23bba98d4b378003.jpg",
    channel_id: 49,
    feature_list: [],
    meta_info: "Shirt Button Details Long Sleeve Sleeve Length Shirt Collar Neckline Regular Fit Length White Color Plain Casual Style Regular Sleeve sm2409135045115860 goods_sn Single Breasted Placket",
    category: "Shirts"
  }
];

