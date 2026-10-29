// Demo content only. Replace this module with a Supabase-backed query when ready.
export type Deal = {
  id: string; business: string; initials: string; category: string; title: string;
  description: string; discount: string; code: string; image: string; color: string;
  location: string; mode: 'In-store' | 'Online' | 'Online & in-store'; featured?: boolean;
};
export const categories = ['All deals', 'Food & drink', 'Fashion', 'Lifestyle', 'Tech', 'Experiences'];
export const deals: Deal[] = [
 {id:'daily-grind',business:'The Daily Grind',initials:'dg.',category:'Food & drink',title:'Your daily coffee, for less.',description:'Make your morning a little sweeter. Enjoy 20% off any handcrafted coffee, from your go-to flat white to an iced latte.',discount:'20% OFF',code:'DEMO-BREW20',image:'coffee',color:'#626a4b',location:'Cape Town',mode:'In-store',featured:true},
 {id:'sole-society',business:'Sole Society',initials:'SS',category:'Fashion',title:'Fresh kicks. Better price.',description:'Step into something new with R150 off a pair of full-price sneakers. A little extra style, a little less spend.',discount:'R150 OFF',code:'DEMO-SOLE150',image:'sneakers',color:'#ad492e',location:'Nationwide',mode:'Online',featured:true},
 {id:'stack-burger',business:'Stack Burger Co.',initials:'stack',category:'Food & drink',title:'Double up on the good stuff.',description:'Bring your favourite person and enjoy two classic burgers for the price of one. The perfect excuse for a lunch date.',discount:'2 FOR 1',code:'DEMO-STACK2',image:'burger',color:'#b87d23',location:'Johannesburg',mode:'In-store',featured:true},
 {id:'wild-weekend',business:'Wild Weekend',initials:'ww',category:'Experiences',title:'A little less ordinary.',description:'Find your next fresh-air escape. Save 25% on a guided day hike and make a weekend worth remembering.',discount:'25% OFF',code:'DEMO-WILD25',image:'mountains',color:'#45726b',location:'Western Cape',mode:'Online'},
 {id:'studio-skin',business:'Studio Skin',initials:'s.',category:'Lifestyle',title:'Good skin. Great savings.',description:'Refresh your routine with 15% off selected skincare essentials, made for a little everyday self-care.',discount:'15% OFF',code:'DEMO-GLOW15',image:'skincare',color:'#a06f60',location:'Nationwide',mode:'Online'},
 {id:'soundwave',business:'Soundwave',initials:'sw/',category:'Tech',title:'Turn it up. Spend less.',description:'Upgrade your everyday listening with R200 off selected wireless headphones. Your playlists deserve it.',discount:'R200 OFF',code:'DEMO-SOUND200',image:'headphones',color:'#635983',location:'Nationwide',mode:'Online'},
 {id:'slice-house',business:'Slice House',initials:'slice',category:'Food & drink',title:'A slice of the good life.',description:'Gather your friends for wood-fired pizza. Get 20% off your food bill when you dine in.',discount:'20% OFF',code:'DEMO-SLICE20',image:'pizza',color:'#9b4c3c',location:'Durban',mode:'In-store'},
 {id:'weekend-wear',business:'Weekend Wear',initials:'W.',category:'Fashion',title:'Everyday looks. Easy prices.',description:'Give your wardrobe a refresh with 15% off full-price everyday essentials, online or in-store.',discount:'15% OFF',code:'DEMO-WEAR15',image:'fashion',color:'#657682',location:'Nationwide',mode:'Online & in-store'}
];
