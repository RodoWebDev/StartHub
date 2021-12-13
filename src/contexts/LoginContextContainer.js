import React, { useState } from 'react';
import { useLocalStorage } from 'hooks';
import { setInterceptors, setAuthHeader } from 'utils/axios';
import api from 'utils/api';
import header_bg_img from 'assets/images/header-bg.png';
import NEWS_ITEM_IMG_1 from 'assets/images/news-item-1.png';
import NEWS_ITEM_IMG_2 from 'assets/images/news-item-2.png';
import NEWS_ITEM_IMG_3 from 'assets/images/news-item-3.png';
import NEWS_ITEM_IMG_4 from 'assets/images/news-item-4.png';
const tempDatas = [
  {
    id: 1,
    pageTitle: 'Home',
    sections: [
      {
        id: 1,
        type: 'Hero',
        title: ['Starting company', 'is easy'],
        imgUrl: header_bg_img,
      },
      {
        id: 2,
        type: 'Business',
        title: 'Set up your business today',
        items: [
          'Business Registration',
          'Patenting',
          'Licensing',
          'Inventor’s Pitch Stream',
          'Residency Visa Packeges',
          'Crowd Funding'
        ],
        subTitle: 'About',
        description: 'Dubai-based Start up consultancy with global reach. StartHub Agency has a proven track record of helping businesses of all sizes, from global banks to start-ups. We are passionate about helping our customers across our three disciplines; strategy, design and registering in short time.',
        action: 'more',
      },
      {
        id: 3,
        type: 'Status',
        title: 'Take your business to Greater Hights in Dubai with StartHub',
        items: [
          { id: 1, subTitle: 'Registered businesses', value: 8540 },
          { id: 2, subTitle: 'Patents & Licenses', value: 3580 },
          { id: 3, subTitle: 'Success', value: 100 },
        ]
      },
      {
        id: 4,
        type: 'News',
        title: 'Recent News',
        items: [
          {
            id: 1,
            createdAt: '24th October 2021',
            imgUrl: NEWS_ITEM_IMG_1,
            title: 'Lorem Ipsum is simply dummy text',
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            action: 'more',
          },
          {
            id: 2,
            createdAt: '24th October 2021',
            imgUrl: NEWS_ITEM_IMG_2,
            title: 'It is a long established fact that a reader will be distracted by the readable',
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            action: 'more',
          },
          {
            id: 3,
            createdAt: '24th October 2021',
            imgUrl: NEWS_ITEM_IMG_3,
            title: 'Lorem Ipsum is simply dummy text',
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            action: 'more',
          },
          {
            id: 4,
            createdAt: '24th October 2021',
            imgUrl: NEWS_ITEM_IMG_4,
            title: 'It is a long established fact that a reader will be distracted by the readable',
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            action: 'more',
          },
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'business',
    pageTitle: 'Register your business',
    sections: [
      {
        id: 1,
        subTitle: 'Register your business in 3 days. Send your video pitch of busiess idea and get investments into your start up.',
        descriptions: [
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        ],
      },
    ],
    formType: 'original',
    formTitle: 'Company Registration Application',
    submitButtonText: 'Apply now',
    containsNews: true,
  },
  {
    id: 3,
    type: 'patenting',
    pageTitle: 'Patenting',
    sections: [
      {
        id: 1,
        subTitle: 'How to patent an idea',
        descriptions: [
          "If you want to learn how to patent a website idea, it is important that you understand the steps necessary to protect your website idea from others who may try to profit from your idea. For example, a utility patent is the most common type of patent. It covers the functional aspects of an invention.",
          "In order for an invention to qualify for patent protection, it must be useful, new, and non-obvious. This means that it must have some sort of purpose or otherwise be useful to potential consumers. It must be new, which means that the invention cannot be similar to another invention already patented. Lastly, it must be non-obvious, meaning that it cannot be an obvious combination of other inventions. These three factors — useful, new, and non-obvious — hold true for website ideas too.",          
          "Before patenting your website idea, you'll want to ensure that your idea qualifies for patent protection. You can do so by searching the United State Patent and Trademark Office (USPTO) website. On this site, you can find lists of website ideas that may not qualify for patent protection. Most importantly, your idea must be practical and straightforward.",
          "After you've determined that you are qualified for patent protection, you can begin the patent application process on the USPTO website. You will have to file a patent application with the USPTO, along with all required fees. Keep in mind that, in the application, you'll have to prove that the website is unique and not merely a duplicate of another website. You should be detailed in your application, as this is a software-related patent application, which is different from most other types of patents.",
          "To patent your website idea or invention, you must write claims that detail what you want to protect and your rationale for needing protection on this type of intellectual property. You'll need to be careful with these claims because patent laws change often, especially with regard to software and other quickly-changing technology. References covering software claims are available for consultation.",          
          "You'll also be required to provide reasons as to why you are applying for protection, why it deserves protection, and the benefit of obtaining such protection. Make sure you include diagrams and drawings that are relevant to the website idea, which can be uploaded electronically if filing online. Once your application is complete, you'll need to convert the entire application, including the drawings, to PDF format before uploading to the USPTO website.",
          "While your application is being filed, owners of websites or software and business ideas must protect those inventions from being stolen or exploited by other people who are out to profit from others' ideas. Protecting your intellectual property should also keep your customers from being misled by what is being offered. Mistakes in this regard can ruin any chances you have of profiting from your inventions and ideas.",          
          'If you receive any correspondence from the Patent Office, you need to respond to it right away, answering any questions or giving all of the additional information they request.',
        ],
      },
      {
        id: 2,
        subTitle: 'Provisional Patents',
        descriptions: [
          "A provisional patent application is filed with the USPTO and establishes an early filing date, but doesn't amount to a formal patent application unless and until the applicant files a non-provisional patent application within the 12 months subsequent to filing the non-provisional patent. A provisional patent application is both less detailed and less costly. Immediately after you file your provisional patent application, you can indicate that your website idea is patent pending. During this time period, you can develop your website idea even further and turn your provisional patent application into a formal non-provisional patent application.",
          "With a provisional application, you'll want to prepare diagrams and drawings of your website when filing the application. When drafting the diagrams, consider the user interface itself, the software-generated process, and the administrative screens/codes/software used to maintain the website:",
          "The term “user interface” refers to what users see while visiting the website, and you will need to document how this interface looks and operates in various user situations.",
          "The software's processes for creating this user interface need to be described in detail as well; this may involve flowcharts, system diagrams, database diagrams, and more.",
          "“Back office,” or “back end,” refers to the administrative screens that are used to maintain the website, add content, and make updates and changes. This will not be visible to the end user, but only to employees and developers. Despite this, it is no less important than the “front end,” or user interface.",
          "Since there are many unique business processes involved in your website, you want to keep each one distinct, showcasing the unique methods and processes utilized and how your website came together. The more specific and detailed you can be, the higher your chance of obtaining patent protection. Always be mindful that you can hire a qualified patent attorney to assist you with preparing your application. You can even hire a professional to assist with the drawings, flowcharts, and diagrams; this person may be able to better illustrate your website and form a persuasive and cohesive outline."
        ],
      },
      {
        id: 3,
        subTitle: 'Software Patents',
        descriptions: [
          "The USPTO has determined that software can be protected by a patent in certain circumstances. U.S. companies can apply for patent protection of innovative processes that exist on their apps and websites. These business methods are patent-qualified, as several companies, including Amazon, have secured patents for specific processes identified on their websites. With the ever-growing changes in technology, companies are competing with one another to find new and creative ways to increase profits and sales while eliminating the hassle and length of time it may take to purchase products on these websites.",
          "Patenting software is a topic of significant controversy in recent years. It has been suggested that patenting software inhibits innovation, rather than allowing “open source” software that other developers can build upon.",
          "Recently, many patents have been given to internet-based companies for what is referred to as “business methods.” These are sought when special software is developed for doing business in a new, innovative way. Since technology-based businesses are extremely competitive, it is increasingly important to protect software innovations that can increase the company's market share.",
          "Amazon's “One Click Checkout” is a good example of a business method that is eligible for patent protection. This was challenged by Barnes and Noble, who employed a similar checkout system on their own website. Amazon and Barnes and Noble ended up in court over this software technology.",
          "Patenting may not be the best method of protecting your intellectual property with regard to a website and an internet-based business. While certain parts of your business method may be well-protected by a patent, it can cost a lot of money to obtain a patent. They may also take several years to be approved, and there's also a chance they may not be valid or enforceable.",
          "For this reason, it's usually large companies with deep pockets that find it worthwhile to seek patents. If you are running a small website or internet business, you may find that other methods of intellectual property protection are better suited to your particular situation."
        ],
      },
      {
        id: 4,
        subTitle: 'Copyrights to Patenting',
        descriptions: [
          "The concept of copyright is different than the patent itself. In simple terms, you can't copyright the concept itself, but you can copyright the design of the website and the code that runs the website. A copyright is generally a specific expression — i.e. text, photography, music, etc. The code of the website falls under the text category and is copyrighted the moment the author writes it. Therefore, copyrights don't generally need to be registered.",
          "The patent covers both inventions and processes, so the copyright may result in a software patent or business method patent. But be mindful that patents can take up to several years for completion. Therefore, once you can claim a copyright, you'll want to have any pertinent records available to apply for a patent as soon as possible.",
          "Again, remember that if you have a good website idea, others will want to copy it. But the idea by itself cannot be patent without also defining the processes that the idea will use to achieve the end goal. Also, the process itself will need to be unique, which can be rather hard to prove, since some methods used on your website idea are probably already being used on other websites.",
          "Once you have proven that your website idea is unique, you can apply for the patent. However, if your application is rejected, you'll have to argue your claim by providing additional proof as to why it should, in fact, be protected by a patent. If you are unable to furnish additional proof, you may want to consider hiring a patent attorney who can assist you in the process."
        ],
      },
      {
        id: 5,
        subTitle: 'Protecting Patents',
        descriptions: [
          "Ideas on their own cannot be protected by a patent or a copyright. Therefore, if you have a general idea for an innovative website or software process, it won't be worth much on its own. Good ideas do tend to be copied, however, so it's worth seeking protection as soon as you have something of value to protect.",
          "Because of how the internet and the web are structured, it is rarely possible to turn an idea into a working process without using methods that are already in use elsewhere. Therefore, you can expect there to be many other websites using those same methods. Even if you were successful in obtaining a patent or a copyright for a website using commonly available methods, the fact that other sites used them first will make yours unenforceable. It will be your unique combination of methods that implement your idea and make it worth seeking intellectual property protection.",          
          "While most companies can probably find a business process or piece of software on their website to patent, companies should keep in mind that it is very time-consuming and costly to obtain patents on website ideas. There is no guarantee that the patent application will be successful in the end. For smaller businesses, other types of protection can be sought that may be more appealing than a patent. However, for large companies, such as Amazon, Samsung, and Panasonic, filing for patent protection is the norm.",          
          "Patent protection is very important for companies wishing to create long-term value in their company. Not only does the website idea or business process provide your company with a competitive edge, but it is often crucial for specific business functions, assisting the company in its daily business operations. For that reason, it is a good idea to consult an experienced lawyer to help you with your IP protection.",          
          "While your patent application is in process, there will likely be several notifications and requests from the Patent Office. Usually, you will have only a short amount of time to respond to this, anywhere from one month to six months. It's important not to overlook this correspondence.",          
          "There are seminars and workshops you can attend, but you just won't be as trained or well versed in this area as a patent attorney is. A patent attorney can make the process go more smoothly. Most importantly, a patent attorney will do the legwork for you, ensuring that you have a well-drafted application to increase your chances of receiving protection.",          
          "If you need help learning how to patent your website idea, you can post your legal need on UpCounsel's marketplace. UpCounsel accepts only the top 5 percent of lawyers to its site. Lawyers on UpCounsel come from law schools such as Harvard Law and Yale Law and average 14 years of legal experience, including work with or on behalf of companies like Google, Menlo Ventures, and Airbnb."
        ],
      },
    ],
    formType: 'original',
    formTitle: 'Patent Registration Application',
    submitButtonText: 'Show your patent on pitch room',
    containsNews: true,
  },
  {
    id: 4,
    type: 'licensing',
    pageTitle: 'Licensing',
    sections: [
      {
        id: 1,
        subTitle: 'What is a Patent Licensing?',
        descriptions: [
          "A patent license is an agreement that lets someone else commercially make, use, and sell your invention for a specified period. The owner of the invention (patent) is the ‘licensor,’ and the person who is receiving the license is the ‘licensee.’ Licensing deals involve payment for the license. The licensor will either receive a single-time payment or as continuing payments known as royalty, depending upon what is agreed between the licensor and the licensee.",
          "Usually, license agreement comes with some terms and conditions agreed by both parties, which have a binding effect on them. The agreement consists definition of the product, mode of payment between parties, the purpose of the license, and many more."
        ],
      },
      {
        id: 2,
        subTitle: 'How to License a Patient',
        descriptions: [
          "Start the process of licensing a patent by making a list of manufacturers with reliable distribution channels. Prepare a list of companies that make similar products to yours, by attending trade shows or searching an online manufacturer database and from magazines that cover similar products. By paying a small fee, the United States Patent and Trademark Office (USPTO) can publish a notice regarding the availability of your patent for the license in its official gazette.",
          "Licensing agreement should be negotiated and drafted by an attorney or intellectual property lawyer. The agreement will mention any upfront payments, amount of royalties, and any future potential infringement issues. You can license the patent to a particular entity in three ways depending on the requirement."
        ],
      },
      {
        id: 3,
        subTitle: 'Licensing Types',
        descriptions: [
          "Exclusive Licensing:",
          "In an Exclusive License, there is the transfer of ownership by the patent holder. It is exclusively granted to him, and he cannot further license it to anybody else. Upon grant of the exclusive license, even the licensor is also excluded from exploiting the intellectual property rights and cannot sell the goods in the territory where the licensee has acquired an exclusive license. In this type of licensing, the risk of infringement is less as it is less exploited and the licensee will have a monopoly over the market, so the cost of the product will be higher than the usual price, and the revenue will also be higher, and licensor will also receive a higher royalty payment.",          
          "But if the patented product is with the reasonable requirements of the public and it is in huge demand and the price is too high. In this case, if the licensee is unable to produce the needed demand and the price is not affordable by many people, then without the permission of the patent owner, the government can issue ‘Compulsory Licensing. In a ‘compulsory license,’ a patent holder’s intellectual property rights as patents are granted subject to compulsory licensing, and the government uses rights against payment either set by law or determined through some form of adjudication or arbitration.",
          "Non-exclusive Licensing:",
          "This involves giving license to more than one entity. It means that one licensee may exploit the invention, but along with him, others who have been given the license for the same patent may be eligible for equal exploitation. The licensor also remains free to exploit the same intellectual property.Co-exclusive Licensing:",
          "A license that takes a middle-ground between exclusive and non-exclusive. Such a license is sometimes known as a “co-exclusive” license and is one in which the licensor grants a license to more than one licensee but agrees that it will only grant licenses to a limited group of other licensees. The group of licensees may be identified by name, description (a license will only be granted to licensees who meet specific criteria), or only by number (the licensor will grant a limited number of licenses)."
        ],
      },
      {
        id: 4,
        subTitle: 'How Patent Licensing differ from the Patent Transfer/assignment?',
        descriptions: [
          "Patent licensing is a revocable agreement between a patent owner and a licensee; the patent owner gives another entity (the “licensee”) permission to use the patented technology, while the patent owner retains ownership.",
          "In the patent assignment, the original owner permanently transfers its ownership to another entity. The original patent owner will be the assignor in the transaction, and the purchaser is the assignee. Once the assignment is made, the assignor will no longer retain the rights to control the patent.",
        ],
      },
    ],
    containsNews: false,
  },
  {
    id: 5,
    type: 'stream',
    pageTitle: 'Investor’s Pitch Stream',
    formType: 'original',
    formTitle: 'Upload Investor Pitch Video Here',
    submitButtonText: 'RECORD VIDEO NOW',
    dropText: 'Drop Your Videos Here',
    containsNews: true,
  },
  {
    id: 6,
    type: 'residency',
    pageTitle: 'Residency Visa Packages',
    sections: [
      {
        id: 1,
        subTitle: 'Residence Visa Packages',
        descriptions: [
          "If you start a business in UAE, it is possible to apply for residency permit based on the ground of pursuit of gainful activity. UAE offers the lowest corporate income tax rate in the Arab Emirates (9%), which is one of the lowest rate in the world. Due to the introduction of the above low tax rate and its existing membership in the Arab Emirates, UAE is a popular and unique destination for company formation and for tax planning for businesses from all over the world. The residency permit can be granted for maximum three years, and it may be extended by maximum three additional years at a time. In order to start the business immigration process you need to establish a Arabian company. We can assist you in the course of the entire application process from initial consultation through registering a company in UAE until the issuance of the residency permit to you and to your family if necessary. If you obtain residency in UAE you will be able to travel within the Dubai zone. After the issuance of the permit your family can also apply for the residency permit if meeting the conditions of the application process.",
          "​ELIGIBILITY CONDITIONS TO OBTAIN RESIDENCE PERMIT FOR PURSUIT OF GAINFUL ACTIVITY ",           
          "A residence permit may be issued for the pursuit of gainful activity to third-country nationals whose purpose of residence is:",
          "· to lawfully perform work in a self-employed capacity for remuneration;",
          "· to engage in any activity in the capacity of being the owner or manager of a for-profit business association, cooperative or some other legal entity, or as a member of the executive, representative or supervisory board of such entity.",
          "If the third-country national is engaged in any activity in the capacity of being the owner or manager of a for-profit business association, cooperative or some other legal entity, or as a member of the executive, representative or supervisory board of such entity, and – apart from such activity – he/she plans to perform actual work (in any traditional job or position) in that company, an application for residence permit for the purpose of employment has to be submitted, that will be assessed in a single application procedure."
        ],
      },
    ],
    formType: 'visa',
    formTitle: 'Ask the information about the Residence Visa',
    submitButtonText: 'Apply now',
    containsNews: true,
  },
  {
    id: 7,
    type: 'funding',
    pageTitle: 'Crowd Funding',
    sections: [
      {
        id: 1,
        subTitle: 'What is the Crowd Funding?',
        descriptions: [
          "Traditional fundraising relies on raising a large sum of money from one source at a time. Crowdfunding, on the other hand, is a strategy that focuses on raising smaller amounts of money from a larger collective of individuals."
        ],
      },
      {
        id: 2,
        subTitle: 'How to work Crowd Funding?',
        descriptions: [
          "Crowd funding, these “backers”—as they’re often called—can be offered a number of incentives in exchange for their support:",
          "The opportunity to become early adopters of an innovative product",
          "The option to pre-order a product and have a say in its development",
          "Exclusive rewards like an early bird discount or free swag when you launch",
          "Personal access to the founding team or the chance to support people they know personally",
          "Equity in an early or growth-stage company with high potential, though this is less common for consumer-facing brands",
          "While every crowdfunding site has its own unique features, platform fee/overall fee structure, and user base, the core concept is the same: you submit your project to the platform with a fundraising goal and a deadline and then campaign for support online, often through social media."
        ],
      },
      {
        id: 3,
        subTitle: 'Get the money your business needs',
        descriptions: [
          "Crowdfunding can offer entrepreneurs a way to raise the money needed to start a business, speed up the product development process, or fund their growth with access to a network of potential investors and customers.",
          "In fact, many Shopify merchants saw their business take off thanks to the money they raised through crowdfunding sites like the ones above.",          
          "But it still takes a little bit of luck and a lot of preparation for you to realize your fundraising goals. You need to convince people that your idea is worth backing, after all, so pitch your campaign the right way to the right people.",
          "If you’re looking for a traditional business loan, check out How to Get a Small Business Loan and What to Know Before Applying. "
        ],
      },
    ],
    formType: 'funding',
    formTitle: 'Crowd funding Registration Application',
    submitButtonText: 'Submit',
    containsNews: true,
  },
];
const LoginContext = React.createContext({
  user: null,
  pagesLoading: false,
  datas: [],
  getPageData: async () => {},
  login: async (email, password) => {},
  register: async (firstName, lastName, email, password) => {},
  logout: () => {}
});
export { LoginContext };

const LoginContextContainer = (props) => {
  /* eslint-disable-next-line */
  const [accessToken, setAccessToken] = useLocalStorage('access-token', undefined, (token) => setAuthHeader(`Barear ${token}`));
  const [user, setUser] = useLocalStorage('startHubUser', undefined);
  const [datas, setDatas] = useState(tempDatas);
  const [pagesLoading, setPagesLoading] = useState(false);
  /**
   * @return An error object or `undefined` if suceed
   */

  const getPageData = async () => {
    setPagesLoading(true);
    try{ 
      const result = await api.getPageData();
      if (result.success) {
        setDatas(result.data.sections);
      }
      setPagesLoading(false);
    } catch (err) {
      setPagesLoading(false);
      return err;
    }
  }

  const loginUser = async (email, password) => {
    if (!email || !password) return 'Email or password is empty';
    try{ 
      const result = await api.loginUser({ email, password });
      const token = result.data.data.token.access_token;
      if(token) {
        setAccessToken(token);
        setUser(result.data.data.user);
        return 'Success';
      } else {
        return 'There was a problem with login';
      }
    } catch (err) {
      return err;
    }
  }

  const registerUser = async (firstName, lastName, email, password) => {
    if (!firstName || !lastName || !email || !password) return 'Email or password is empty';
    try{ 
      const result = await api.registerUser({ firstName, lastName, email, password });
      const token = result.data.data.token.access_token;
      if(token) {
        setAccessToken(token);
        setUser(result.data.data.user);
        return 'Success';
      } else {
        return 'There was a problem with login';
      }
    } catch (err) {
      return err;
    }
  }

  const logoutUser = () => {
    setUser(undefined);
    setAccessToken(undefined);
  }

  setInterceptors(logoutUser);

  return (
    <LoginContext.Provider
      value={{
        user,
        pagesLoading,
        datas,
        login: loginUser,
        logout: logoutUser,
        register: registerUser,
        getPageData,
      }}
    >
      { props.children }
    </LoginContext.Provider>
  )
}

export default LoginContextContainer;
