"use strict";
(() => {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 1009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Portofolio),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layouts/Section.js + 1 modules
var Section = __webpack_require__(9304);
;// CONCATENATED MODULE: ./components/Card.js


function Card(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "border-2 rounded-md cursor-pointer border-dashed dark:border-gray-600",
        children: props.children
    }));
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/portfolio/Portfolio.js




function Portfolio(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Card, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            onClick: props.onClick,
            className: "relative h-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: props.img,
                    layout: "responsive",
                    height: 75,
                    width: 100,
                    objectFit: "contain",
                    className: "rounded-t-md",
                    alt: props.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "font-semibold xl:text-base xl:mb-2 text-sm",
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-gray-600 dark:text-gray-300 font-medium xl:text-sm text-xs",
                            children: props.category
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./utilities/constant.js
var constant = __webpack_require__(9489);
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
;// CONCATENATED MODULE: ./components/Modal.js



function Modal(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
        appear: true,
        show: props.isOpen,
        as: external_react_.Fragment,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Dialog, {
            as: "div",
            className: "fixed inset-0 backdrop-blur-sm bg-white/10 dark:bg-black/75 z-50 overflow-y-auto",
            onClose: props.onClose,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "min-h-screen px-4 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition.Child, {
                            as: external_react_.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Dialog.Overlay, {
                                className: "fixed inset-0"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition.Child, {
                            as: external_react_.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "inline-block relative w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white/90 dark:bg-black/50 border-2 border-dashed shadow-xl rounded-2xl dark:border-gray-600",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: props.onClose,
                                        className: "absolute cursor-pointer dark:bg-black bg-white right-3 top-3 border-2 rounded-full p-2 border-dashed z-50 dark:border-gray-600",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 dark:text-white text-black w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            })
                                        })
                                    }),
                                    props.children
                                ]
                            })
                        })
                    ]
                }),
                props.action
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/text/Paragraph.js


function Paragraph(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: `leading-8 ${props.className}`,
        children: props.children
    }));
};

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/portfolio/PortfolioDetail.js







function PortfolioDetail(props) {
    var ref;
    const portfolio = props.data;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal, {
        isOpen: props.isOpen,
        onClose: props.onClose,
        action: props.children,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: constant/* default.storage */.Z.storage + `${(ref = portfolio.img) === null || ref === void 0 ? void 0 : ref.path}`,
                alt: portfolio.title,
                className: "object-cover",
                layout: "responsive",
                width: 75,
                height: 60,
                objectFit: "contain"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "font-semibold xl:text-xl xl:mb-3 mb-2 text-base",
                        children: portfolio.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                        className: "mb-3 text-sm leading-6",
                        children: portfolio.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between items-center mt-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-gray-600 dark:text-gray-300 font-medium xl:text-sm text-xs",
                                children: portfolio.category
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-5",
                                children: [
                                    portfolio.github && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: portfolio.github,
                                        rel: "noreferrer",
                                        target: "_blank",
                                        className: "ring-0 text-gray-800 outline-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                            size: 18
                                        })
                                    }),
                                    portfolio.link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: portfolio.link,
                                        rel: "noreferrer",
                                        target: "_blank",
                                        className: "ring-0 text-gray-800 outline-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGlobe, {
                                            size: 18
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/MetaSeo.js
var MetaSeo = __webpack_require__(2037);
// EXTERNAL MODULE: ./utilities/http.js + 1 modules
var http = __webpack_require__(5825);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/portfolio.js









function Portofolio({ portfolios  }) {
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: singleData , 1: setSingleData  } = (0,external_react_.useState)([]);
    const handleOpenModal = (value)=>{
        setSingleData(value);
        setIsOpen(true);
    };
    const handleCloseModal = ()=>setIsOpen(false)
    ;
    const router = (0,router_.useRouter)();
    const handleFilter = (e)=>{
        const value = e.target.value;
        if (value !== "all") {
            router.query.filter = value;
            router.push(router);
        } else {
            router.push("/portfolio");
        }
    };
    const nextData = ()=>{
        const index = portfolios.findIndex((value)=>value._id === singleData._id
        );
        if (index + 1 < portfolios.length) {
            setSingleData(portfolios[index + 1]);
        }
    };
    const prevData = ()=>{
        const index = portfolios.findIndex((value)=>value._id === singleData._id
        );
        if (index - 1 >= 0) {
            setSingleData(portfolios[index - 1]);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        title: "Portfolio",
        subtitle: "Beberapa pekerjaan yang sudah saya kerjakan sampa saat ini.",
        action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
            className: "text-gray-500 ring-0 dark:border-gray-600 dark:bg-black dark:text-white outline-none cursor-pointer border w-full lg:w-52 py-3 px-5 border-dashed rounded-sm",
            onChange: handleFilter,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "all",
                    children: "Semuanya"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "Mobile Application",
                    children: "Mobile Application"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "Web Application",
                    children: "Web Application"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "Web Design",
                    children: "Web Design"
                })
            ]
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MetaSeo/* default */.Z, {
                title: "Portfolio - Harithya Wisesa",
                description: "Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6",
                "data-aos": "fade-up",
                children: portfolios.map((value)=>{
                    var ref;
                    return(/*#__PURE__*/ jsx_runtime_.jsx(Portfolio, {
                        img: constant/* default.storage */.Z.storage + `${(ref = value.img) === null || ref === void 0 ? void 0 : ref.path}`,
                        title: value.title,
                        category: value.category,
                        onClick: ()=>handleOpenModal(value)
                    }, value._id));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PortfolioDetail, {
                isOpen: isOpen,
                onClose: handleCloseModal,
                data: singleData,
                children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: prevData,
                            className: "fixed ml-5 left-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15.75 19.5L8.25 12l7.5-7.5"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: nextData,
                            className: "fixed mr-5 right-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
async function getServerSideProps({ query  }) {
    let url = "items/portfolio";
    if (query.filter) {
        const params = encodeURIComponent(JSON.stringify({
            category: query.filter
        }));
        const filter = `?filter=${params}`;
        url = `items/portfolio${filter}`;
    }
    const req = await http/* default.get */.Z.get(url);
    return {
        props: {
            portfolios: req.data
        }
    };
}


/***/ }),

/***/ 5825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utilities_http)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./utilities/constant.js
var constant = __webpack_require__(9489);
;// CONCATENATED MODULE: ./utilities/http.js


const http = external_axios_default().create({
    baseURL: constant/* default.baseUrl */.Z.baseUrl,
    headers: {
        "Content-type": "application/json",
        "api-key": constant/* default.key */.Z.key
    }
});
/* harmony default export */ const utilities_http = (http);


/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675,37,304], () => (__webpack_exec__(1009)));
module.exports = __webpack_exports__;

})();