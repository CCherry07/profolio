import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "About": "About",
          "Work": "Work",
          "frontEndDevelopmentEngineer": "Front End Development Engineer",
          "aboutMe": "About Me",
          "Introduction": "Introduction",
          "name": "Name",
          "email": "Email",
          "phone": "Phone",
          "address": "Address",
          "education": "Education",
          "experience": "Experience",
          "skills": "Skills",
          "projects": "Projects",
          "contact": "Contact",
          "contactMe": "Contact Me",
          "contactMeDescription": "If you have any questions or suggestions, please contact me.",
          "contactMeDescription2": "I will reply to you as soon as possible.",
          "contactMeDescription3": "Thank you for your support.",
          "OVERVIEW": "OVERVIEW",
          "INTRODUCTION": "INTRODUCTION",
        }
      },
      zh: {
        translation: {
          "About": "关于",
          "Work": "工作",
          "frontEndDevelopmentEngineer": "前端开发工程师",
          "aboutMe": "关于我",
          "Introduction": "简介",
          "name": "姓名",
          "email": "邮箱",
          "phone": "电话",
          "address": "地址",
          "education": "教育",
          "experience": "经验",
          "skills": "技能",
          "projects": "项目",
          "Contact": "联系",
          "contactMe": "联系我",
          "contactMeDescription": "如果您有任何问题或建议，请联系我。",
          "contactMeDescription2": "我会尽快回复您。",
          "contactMeDescription3": "感谢您的支持。",
          "OVERVIEW": "概述",
          "INTRODUCTION": "简介",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
