/* empty css                                 */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, h as renderSlot, a as renderTemplate, r as renderComponent, i as renderScript } from '../chunks/astro/server_5S5MEE25.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_DIKfedux.mjs';
import 'clsx';
/* empty css                                 */
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bs51pLby.mjs';
import { c as createSvgComponent, a as c1 } from '../chunks/runtime_DHlVdA1J.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CR7qcWS9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Section.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/ui/SectionTitle.astro", void 0);

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      title: "NEOM Industries",
      description: "Branding, product photography, catalogue design, and social media marketing.",
      link: "/portfolio/neom"
    },
    {
      title: "FLATPUNK",
      description: "Fashion branding, website development, product launch creatives, and digital marketing.",
      link: "/portfolio/flatpunk"
    },
    {
      title: "Ozone Hotels",
      description: "Hotel digital marketing, social media management, promotional campaigns, and branding.",
      link: "/portfolio/ozone-hotels"
    },
    {
      title: "Kings Empire Kochi",
      description: "Hospitality branding, event promotions, and online marketing campaigns.",
      link: "/portfolio/kings-empire"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Our Portfolio", "description": "Explore some of our recent branding, digital marketing, website development, and creative projects that have helped businesses grow their online presence." })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-white rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <div class="flex flex-col gap-3"> <h3 class="text-2xl font-semibold">${card.title}</h3> <p class="text-white/80">${card.description}</p> </div> <div class="flex flex-col gap-3"> <h3 class="text-2xl font-semibold">${card.title}</h3> <p class="text-white/80">${card.description}</p> </div> </div> </div> ` })}`)} </div> ` })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Cases.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="w-full px-5 md:px-6"> <div class="bg-[#142B52] text-white rounded-t-[48px] md:rounded-t-[64px] overflow-hidden"> <!-- Contact Content --> <div class="max-w-6xl mx-auto px-6 md:px-12 pt-14 md:pt-16 pb-12"> <!-- Logo --> <div class="flex justify-center"> <img src="/nextstep-logo.png" alt="NextStep Digital" class="w-[78px] md:w-[90px] h-auto"> </div> <!-- Heading --> <div class="text-center mt-7 md:mt-8"> <h2 class="text-[30px] md:text-[34px] font-bold leading-tight tracking-[-0.5px]">
Let's Grow Together
</h2> <p class="mt-5 max-w-[720px] mx-auto text-[15px] md:text-[16px] leading-7 text-white">
NextStep Digital helps businesses grow through Branding, Social Media Management,
          Graphic Design, Website Development, SEO and Creative Marketing Solutions.
</p> </div> <!-- Contact Details --> <div class="mt-10 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-9 text-[15px] md:text-[16px]"> <a href="mailto:nextstepdigital.india@gmail.com" class="flex items-center gap-2 hover:text-blue-300 transition whitespace-nowrap"> <span>📧</span> <span>nextstepdigital.india@gmail.com</span> </a> <a href="tel:+917306989358" class="flex items-center gap-2 hover:text-blue-300 transition whitespace-nowrap"> <span>📞</span> <span>+91 73069 89358</span> </a> <span class="flex items-center gap-2 whitespace-nowrap"> <span>📍</span> <span>Kochi, Kerala, India</span> </span> </div> <!-- Instagram --> <div class="flex justify-center mt-8"> <a href="https://www.instagram.com/nextstepdigital.india/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-[#2868E8] hover:bg-[#1F5BD0] px-7 py-3 rounded-full text-[15px] font-semibold transition"> <img src="/instagram.svg" alt="Instagram" class="w-5 h-5"> <span>@nextstepdigital.india</span> </a> </div> <!-- Divider --> <div class="border-t border-white/20 mt-12"></div> <!-- Footer --> <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-7 text-[13px] md:text-[14px] text-white"> <span>
© 2026 NextStep Digital. All Rights Reserved.
</span> <span>
Designed &amp; Developed by NextStep Digital
</span> </div> </div> </div> </section>`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Contact.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-2 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center md:text-left">
Transform Your <br>
Business with <br>
NextStep Digital
</h1> <p class="mt-6 text-base md:text-lg text-gray-600 text-center md:text-left max-w-xl mx-auto md:mx-0">
We help businesses grow through branding, social media management,
  graphic design, website development, SEO, and content creation.
</p> <div class="flex justify-center md:justify-start w-full"> <a href="#contact" class="w-full sm:w-auto max-w-sm px-6 py-4 bg-zinc-900 hover:bg-blue-700 rounded-2xl text-center text-white text-lg md:text-xl font-medium transition-all duration-300">
Get Free Consultation
</a> </div> </div> </div> <div class="flex justify-center items-center py-4 md:w-6/12 md:pb-20 md:pt-10"> <img src="/hero-nextstep.png" alt="NextStep Digital Hero" class="w-80 sm:w-96 md:w-full h-auto mx-auto"> </div> </div> ` })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Hero.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#081B3A] text-white overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-[#1E3A5F] shadow-[0px_5px_0px_#06142B]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-white/20" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const content = [
    {
      index: 1,
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      index: 2,
      title: "Research",
      description: "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals."
    },
    {
      index: 3,
      title: "Implementation",
      description: "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget."
    },
    {
      index: 4,
      title: "Optimization",
      description: "After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement."
    },
    {
      index: 5,
      title: "Reporting",
      description: "Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies."
    },
    {
      index: 6,
      title: "Improvement",
      description: "Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals."
    }
  ];
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
  })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "A streamlined workflow that helps us deliver creative, effective, and result-driven digital solutions for every client.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "How We Work", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Process.astro", void 0);

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center bg-[#F3F3F3] rounded-[45px] p-[60px] mt-[123px] mb-[163px]"> <div class="max-w-3xl flex flex-col items-center text-center gap-6"> <h2 class="text-4xl font-bold">
Ready to Grow Your Business?
</h2> <p class="text-lg">
Partner with NextStep Digital to build a powerful online presence through
      branding, social media management, website development, SEO, graphic
      design, and content creation.
</p> <a href="/#contact" class="btn-primary">
Get Free Consultation
</a> </div> </div> ` })} ` })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Proposal.astro", void 0);

const wob = createSvgComponent({"meta":{"src":"/_astro/icon7.Djoc5xdb.svg","width":41,"height":41,"format":"svg"},"attributes":{"width":"41","height":"41","viewBox":"0 0 41 41","fill":"none"},"children":"\r\n<circle cx=\"20.5\" cy=\"20.5\" r=\"20.5\" fill=\"white\" />\r\n<path d=\"M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z\" fill=\"black\" />\r\n"});

const $$Astro = createAstro("http://localhost:4321");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { index, titleTop, titleBottom, img, alt, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true, "data-astro-cid-qzn24t3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] bg-dark text-white" data-astro-cid-qzn24t3o> <h3 class="flex flex-col col-span-2 lg:col-span-1" data-astro-cid-qzn24t3o> <span class="w-fit whitehead" data-astro-cid-qzn24t3o>${titleTop}</span> <span class="w-fit whitehead" data-astro-cid-qzn24t3o>${titleBottom}</span> </h3> <picture class="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center" data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": img, "alt": alt, "class": "h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover", "data-astro-cid-qzn24t3o": true })} </picture> <div class="flex items-end" data-astro-cid-qzn24t3o> <a${addAttribute(link, "href")} class="flex items-center gap-3.5" data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": wob, "alt": alt, "data-astro-cid-qzn24t3o": true })} <span class="hidden sm:block text-white" data-astro-cid-qzn24t3o>Service Info</span> </a> </div> </div> ` })} `;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/ui/ServiceCard.astro", void 0);

const c2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

const c3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

const c4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

const c5 = new Proxy({"src":"/_astro/card-pic5.CqK5dBMJ.png","width":210,"height":196,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/assets/pics/card-pic5.png";
							}
							
							return target[name];
						}
					});

const c6 = new Proxy({"src":"/_astro/card-pic6.CXJkFMY0.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/assets/pics/card-pic6.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Social Media",
      titleBottom: "Management",
      img: c1,
      alt: "Social Media Management",
      link: "/services#social-media-management"
    },
    {
      index: 2,
      titleTop: "Brand Strategy",
      titleBottom: "& Positioning",
      img: c2,
      alt: "Brand Strategy & Positioning",
      link: "/services#branding-graphic-design"
    },
    {
      index: 3,
      titleTop: "Graphic",
      titleBottom: "Design",
      img: c3,
      alt: "Graphic Design",
      link: "/services#branding-graphic-design"
    },
    {
      index: 4,
      titleTop: "Search Engine",
      titleBottom: "Optimization",
      img: c4,
      alt: "Search Engine Optimization",
      link: "/services#seo"
    },
    {
      index: 5,
      titleTop: "Website",
      titleBottom: "Development",
      img: c5,
      alt: "Website Development",
      link: "/services#website-development"
    },
    {
      index: 6,
      titleTop: "Content",
      titleBottom: "Creation",
      img: c6,
      alt: "Content Creation",
      link: "/services#content-creation"
    }
  ];
  const description = "From strategy to execution, NextStep Digital helps your business grow with creative marketing solutions that deliver measurable results.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-10 mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Services", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-3 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/components/sections/Services.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "NextStep Digital", "description": "A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, NextStep Digital is the perfect template to showcase your agency's services and case studies to potential clients. Built with astro and tailwindcss" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/pages/index.astro", void 0);

const $$file = "C:/Users/amalu/OneDrive/Documents/Projects/nextstep-digital/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
