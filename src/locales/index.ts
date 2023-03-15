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

          "Web Developer": "Web Developer",
          "React Developer": "React Developer",
          "Vue Developer": "Vue Developer",
          "Content Creator": "Content Creator",

          "What i have done so far": "What i have done so far",
          "Work Experience": "Work Experience",
          "My Work": "My Work",
          "Projects": "Projects",
          "Projects Dec": "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
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

          "Web Developer": "网页开发者",
          "React Developer": "React 开发者",
          "Vue Developer": "Vue 开发者",
          "Content Creator": "内容创作者",

          "What i have done so far": "我做过的事情",
          "Work Experience": "工作经验",
          "My Work": "我的工作",
          "Projects": "项目集",
          "Projects Dec": "以下项目通过我工作的真实示例展示了我的技能和经验。每个项目都通过指向代码存储库和其中的现场演示的链接进行了简要描述。它反映了我解决复杂问题、使用不同技术以及有效管理项目的能力"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
