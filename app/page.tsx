'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Coffee, Copy, Grid2X2, Headphones, MapPin, Search, ShieldCheck, Shirt, Sparkles, TicketPercent, UserRound, X, Compass } from 'lucide-react';
import { categories, deals, type Deal } from '@/lib/deals';
const icons = [Grid2X2, Coffee, Shirt, Sparkles, Headphones, Compass];
export default function Home() {
 const [query, setQuery] = useState('');
 const [category, setCategory] = useState('All deals');
 const [sort, setSort] = useState('recommended');
 const [selected, setSelected] = useState<Deal | null>(null);
 const [account, setAccount] = useState(false);
 const [revealed, setRevealed] = useState(false);
 const [copied, setCopied] = useState(false);
 const [copyError, setCopyError] = useState(false);
 const dialog = useRef<HTMLDialogElement>(null);
 const copyButton = useRef<HTMLButtonElement>(null);
 useEffect(() => { if (revealed) copyButton.current?.focus(); }, [revealed]);
 const modalOpen = !!selected || account;
 useEffect(() => {
   const node = dialog.current;
   if (modalOpen) { node?.showModal(); document.body.style.overflow = 'hidden'; }
   else { node?.close(); document.body.style.overflow = ''; }
   return () => { document.body.style.overflow = ''; };
 }, [modalOpen]);
 function close() { setSelected(null); setAccount(false); setRevealed(false); setCopied(false); setCopyError(false); }
 function openDeal(deal: Deal) { setRevealed(false); setCopied(false); setCopyError(false); setSelected(deal); }
 async function copyCode() { if (!selected) return; try { await navigator.clipboard.writeText(selected.code); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }
 const filtered = deals.filter(d => (category === 'All deals' || d.category === category) && `${d.business} ${d.category} ${d.title} ${d.location}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a,b) => sort === 'az' ? a.business.localeCompare(b.business) : 0);
 return <>
  <a className="skip" href="#deals">Skip to deals</a>
  <header className="header"><div className="header-inner">
   <a href="#" className="brand" aria-label="Beezlo Cash home"><span className="bee-logo"><img src="/images/beezlo-logo.png" alt="" /></span><span>beezlo<span className="brand-cash">cash<span className="brand-dot">.</span></span></span></a>
   <span className="header-tagline">A little more for a little less.</span>
   <button className="account" onClick={()=>setAccount(true)}><UserRound size={18}/><span>My account</span><ChevronDown size={14}/></button>
  </div></header>
  <main className="container">
   <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy"><div className="eyebrow"><span/> GOOD FINDS. GREAT SAVINGS.</div><h1 id="hero-title">Big on living.<br/>Little on spending<span>.</span></h1><p>Your next coffee, fresh kicks, weekend plans.<br className="desktop-break"/> Discover deals that make the everyday better.</p><a className="dark-button" href="#deals">Find your next deal <ArrowDown size={17}/></a></div>
    <div className="hero-art" aria-hidden="true"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><span className="star star-one">✳</span><span className="star star-two">✦</span><div className="ticket-back"><span>GOOD THINGS<br/>ARE BUZZING.</span></div><div className="hero-ticket"><div className="ticket-top"><TicketPercent size={23}/><span>THE EVERYDAY UPGRADE</span></div><div className="ticket-big">Less spend.<br/><em>More yes.</em></div><div className="ticket-tear"/><div className="ticket-bottom"><span>GOOD DEALS, ON US.</span><ArrowUpRight size={24}/></div></div><div className="free-sticker">100%<br/><span>FREE TO EXPLORE</span></div></div>
   </section>
   <div className="benefits"><span><TicketPercent size={17}/> A deal for your everyday</span><span><ShieldCheck size={17}/> Free to browse. Easy to use.</span><span><Sparkles size={17}/> Less spending. More living.</span></div>
   <section id="deals" className="deals-section" aria-labelledby="deals-title">
    <div className="section-heading"><div><span className="eyebrow muted">THE GOOD STUFF STARTS HERE</span><h2 id="deals-title">Find your next good deal<span>.</span></h2></div><span className="demo-tag"><span/> Demo collection</span></div>
    <div className="search-row"><div className="search-wrap"><Search size={20}/><label className="sr-only" htmlFor="search">Search deals, businesses or locations</label><input id="search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search deals, brands or places…"/>{query && <button onClick={()=>setQuery('')} aria-label="Clear search"><X size={16}/></button>}</div><div className="sort-wrap"><label htmlFor="sort">Sort by:</label><select id="sort" value={sort} onChange={e=>setSort(e.target.value)}><option value="recommended">Recommended</option><option value="az">Business A–Z</option></select></div></div>
    <div className="categories" aria-label="Filter deals by category">{categories.map((c,i)=>{const Icon=icons[i];return <button key={c} aria-pressed={category===c} className={category===c?'active':''} onClick={()=>setCategory(c)}><Icon size={16}/>{c}</button>})}</div>
    <div className="results-row"><p aria-live="polite">Showing <strong>{filtered.length}</strong> {filtered.length===1?'deal':'deals'}{category!=='All deals'?` in ${category.toLowerCase()}`:''}</p><span>Discover something worth saying yes to.</span></div>
    <div className="deal-grid">{filtered.map(deal=><article className="deal-card" key={deal.id}>
      <button className="deal-main" aria-label={`View deal from ${deal.business}`} onClick={()=>openDeal(deal)}><div className="deal-photo"><img src={`/images/${deal.image}.jpg`} alt="" loading="lazy"/><span className="discount">{deal.discount}</span><span className="mode">{deal.mode}</span></div><div className="card-body"><div className="merchant"><span className="merchant-logo" style={{background:deal.color}}>{deal.initials}</span><div><h3>{deal.business}</h3><span>{deal.category}</span></div><ArrowUpRight size={18}/></div><p className="deal-title">{deal.title}</p><div className="card-bottom"><span><MapPin size={13}/>{deal.location}</span><span className="view-code">View deal <ArrowRight size={15}/></span></div></div></button>
    </article>)}</div>
    {filtered.length===0 && <div className="empty"><Search size={30}/><h3>No deals found just yet.</h3><p>Try another business, place or category.</p><button className="dark-button" onClick={()=>{setQuery('');setCategory('All deals')}}>Show all deals <ArrowRight size={16}/></button></div>}
   </section>
   <section className="how-it-works"><div className="how-title"><span className="mini-bee"><TicketPercent size={23}/></span><div><h2>Good deals. Zero fuss.</h2><p>A little saving is just a few taps away.</p></div></div><div className="step"><span>01</span><div><strong>Find your favourite</strong><p>Explore a deal that’s your kind of thing.</p></div></div><div className="step"><span>02</span><div><strong>Get the code</strong><p>Open the deal and copy your code.</p></div></div><div className="step"><span>03</span><div><strong>Enjoy a little more</strong><p>Use it with the participating business.</p></div></div></section>
  </main>
  <footer className="footer"><div><span className="footer-brand">beezlo cash.</span><p>Small savings. More possibilities.</p></div><p>Just a taste of what’s coming.<br/><span>All businesses, offers and codes shown are fictional demo examples.</span></p><span className="footer-year">© {new Date().getFullYear()} Beezlo Cash</span></footer>
  <dialog ref={dialog} className="deal-dialog" onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close()}} aria-labelledby="modal-title" onClose={()=>{if(modalOpen)close()}}>
   <button className="modal-close" onClick={close} aria-label="Close dialog"><X size={20}/></button>
   {account ? <div className="account-content"><span className="account-icon"><UserRound size={30}/></span><span className="eyebrow muted">COMING SOON</span><h2 id="modal-title">Your little corner<br/>of Beezlo Cash.</h2><p>Accounts are on the way. For now, explore every demo deal without signing in.</p><button className="dark-button" onClick={close}>Back to the good stuff <ArrowRight size={17}/></button></div> : selected && <><div className="modal-image"><img src={`/images/${selected.image}.jpg`} alt=""/><span className="discount">{selected.discount}</span></div><div className="modal-content"><span className="eyebrow muted">{selected.category} · {selected.mode}</span><h2 id="modal-title">{selected.business}</h2><h3>{selected.title}</h3><p>{selected.description}</p><div className="modal-location"><MapPin size={16}/>{selected.location}</div><div className="code-area">{revealed ? <><span className="code-label">YOUR DEMO CODE</span><div className="code-row"><code>{selected.code}</code><button ref={copyButton} className="copy-button" onClick={copyCode}>{copied?<Check size={17}/>:<Copy size={17}/>} {copied?'Copied!':'Copy code'}</button></div><p role="status">{copyError?'Could not copy automatically. Select and copy the code above.':copied?'Code copied to your clipboard.':'Copy the code to try the experience.'}</p></> : <button className="reveal-button" onClick={()=>setRevealed(true)}><TicketPercent size={19}/> View demo code <ArrowRight size={18}/></button>}</div><div className="terms"><strong>A quick heads-up</strong><p>This is a fictional business and sample offer. Demo codes cannot be redeemed. In the live site, each offer will include its expiry date and the business’s terms.</p></div></div></>}
  </dialog>
 </>;
}
