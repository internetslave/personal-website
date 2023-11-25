const h2 = document.querySelector(".column>h2");
const container = document.querySelector(".subpage-btns");
const subpagePara = document.getElementById('para');

const options = ['Description', 'Justification', 'Lessons Learned', 'Goals'];

let currentOption = 'Description'; // default option

function updatePara(updatedPara) {
  subpagePara.textContent = updatedPara;
}

renderButtons = () => {

  const currentOptions = options.filter(o => o !== currentOption);

  container.innerHTML = '';

  currentOptions.forEach(opt => {

    const subpageBtn = document.createElement('btn');
    subpageBtn.textContent = opt;

    subpageBtn.addEventListener('click', () => {
      selectHeader(opt);

      const sections = {


        "Description": {
          // location path name(not relative path) - string object property name
          // object property name must match the location path name for the page calling the function
          "/reflection-subpages/lead-mentor.html": "You get assigned a group of first year mentees from within you assist them all throughout the year. The idea is you used to be in their shoes, so you know exactly the type of struggles they would deal with plus they might feel more comfortable coming to you than a professor. Additionally, since I’m a lead mentor and not just a CERT mentor, I have a group of CERT mentors within my department that I assist with as well. I help them with any questions they have regarding the role and take the lead on organising department wide events with other courses as well as specific course-based events. ",
          "/reflection-subpages/code-dojo.html": "I introduced coding to the children by walking through printed Scratch worksheets. Most of them are self explanatory however, there were inevitebly questions but I was always there happy to help. In order to cater to the more advanced students who usually already had prior pre-existing knowledge; I used a whiteboard as a visual aid and demonstrated how the fundamental programming concepts embedded within Scratch translates into Python. I chose Python as it is a relatively easy programming language, and some of the more advanced students already had previous experience with it. This approach allowed me to challenge advanced students but also reinforce my own knowledge as teaching others is a good way to refresh and ensure that I understand the basics myself. I also created a friendly programming competition for all the students but it was tailored to test their own personal skills, so the more advanced students had harder questions and so on.",
          "/reflection-subpages/course-rep.html": "You represent your peers (so I represent all 2nd year computer science undergraduate students) in the student's union. You try to gather as much feedback as possible in order to improve the course, and you talk to not only the union but your own departmental leads. You get an insight into how the department truly functions and you get to be present in all the important meetings and have a say in it all. ",
          "/reflection-subpages/grads4nottm.html": "Each group is given a challenge made by a local company; the startup associated with my challenge was Anteam. We used Jira for Agile Development. We did not actually have time to both create a new API from scratch however talking to their tech lead in a meeting about the possibility of doing so was interesting. And starting on the initial development of it and handing it over to the teach lead was very informative because it made me realise how much collaboration is required in industry as every project is a ‘group project’. Collaboration is undeniably crucial to the role, and this was an effective way of evaluating my collaboration skills as I was in a team and with a bunch of new people for two weeks.  ",
          "/reflection-subpages/it-support.html": "I help out at a local library as I am a huge fan of in person work, as there is certain elements that can never translate online. People in my generation take their tech skills for granted, and do not consider the elderly who are constantly being left behind. A lot of the time I end up helping those who are from the generations above. Additionally, I care deeply about local communities as I find people are too quick to look online to find what is missing in their everyday lives. Speaking from experience, I have fallen into that trap many times, but I want to feel grounded to where I am, and to not always resort to searching for a solution on the internet to solve reality. Hence why I am prioritizing face to face interactions. Online connection even if intimate, is never as rewarding.",
          "/reflection-subpages/library-mentor.html": "A lot of students are afraid to go to professors and ask for help as they’re usually busy and they might not know them, and they also don’t want to go to adults in the library for support; which is why having a fellow student is so important. I am extremely approachable, and help them with academic writing in the library in my free hours between classes (I’m already in the library anyways) so when people book me in it’s extremely convenient.  ",
          "/reflection-subpages/achievement.html": "This role is one through Unitemps and this is good because all of the part time jobs I hold through them are extremely flexible since they consider the fact that I am a busy student. I enjoy the fact that I can decide when I want to work with as opposed to having shifts delegated to me. However this specific one requires more committment and is not as flexible as the others which makes it more difficult. I must go in one day a week for an entire school day to help the students. I obviously get to choose which day (the day where I only have one lecture) so it is still flexible in that regards. I find that missing the lecture does make me have to play catch up but I find helping these students extremely rewarding so I am willing to make the sacrifice.",
          "/reflection-subpages/this-website.html": "I have opinions I want to share and creating my own personal website is the perfect medium to do so. It is not a unique idea as having a portfolio website is a common project however, I do feel as though I have put my own personal twist on it. I think most of them contain a ton of generic content(hobbies etc.) and look rather identical to one another. Although visually speaking this website needs a ton of improvement I think content wise it stands out. ",
          "/reflection-subpages/trinity.html": "I had the privilege of being a Computing assistant for three weeks at The Trinity Catholic School through a summer teaching intern programme provided by Our Lady of Lourdes Catholic Multi-Academy Trust. I was essentially the middleman, since I was assisting the students, but simultaneously receiving feedback from the teacher.   I walked around the computer lab and assisted any of the children with difficulties. Additionally, besides helping the teacher with their lesson plan I had a brilliant opportunity to create my own lesson plan.  ",

          "/tools-subpages/arch.html": "It is my daily driver since I enjoy the bare bone approach to an operating system. Having to use the command line and understand the system and all its under the hood complexities is especially useful in this field. Additionally, using 'cutting edge' technology is exciting. I was originally a Windows user however I made the switch. However, when necessary I have the ability to run a windows VM (which is practically never). For my systems software coursework we need to use a specific docker container configured with Ubuntu but instead of using docker desktop like most of my peers I just run docker through the command line as I am already familiar with it. So although there was a initially a bit of a learning curve I am glad I switched as it ended up saving me time.",
          "/tools-subpages/graphene.html": "Graphene OS is a hardened version of Android and is used by privacy focused individuals. It is not compatiable with all phones, I had to specifically buy a used unlocked bootloader Pixel from eBay to use it. If it is not unlocked you cannot install Graphene onto it. It is FOSS obviously which makes it cool as anyone can check out it's source code. However, FOSS doesn't automatically equate to 'ethical' and it's important to recognise that. ",
          "/tools-subpages/monero.html": "Most people equate cryptocurrency with Bitcoin (BTC); however, despite it being the first and the most popular there are a multitude of existing alternatives that serve different purposes, Monero (XMR) being one of them. Its initial idea was proposed in 2013 by Nicholas van Saberhagen, but it’s inevitably evolved since. Despite, its evolution its goal of being a more private alternative to Bitcoin has never changed  (Saberhagen, 2013) . In Kappos’s UCL dissertation, he highlights that unlike Monero, BTC transactions aren’t completely anonymous and as a result the users can be tracked. Despite there being other coins in the space that also have a similar privacy purpose such as Zcash or Dash, XMR remains the most popular as it consistently proves itself as the most private. ",
          "/tools-subpages/pi-hole.html": "Pi-hole enables me to block all advertisements network wide which is incredibly useful. Watching advertisements has further consequences than it just being a waste of time. Even if you dislike all ads, and watch it hating it, their messaging still affects you on a subconcious level whether you realise it or not.",


        },
        "Justification": {
          "/reflection-subpages/lead-mentor.html": "I've attended two student mentor events hosted by my department in my first year. The events were fun and despite them not being run regularly I know that they can make a difference as it did in my experience since I befriended two second year student mentors through them as well as met other people from other courses in the department. This is I was keen on becoming a mentor. I wanted to give back because these events made me feel welcomed and gave me a sense of community so I'm hoping to make others feel the same way I did, as it only feels right sharing it with other people. This is a perfect opportunity for me to develop my leadership skills whilst simultaneously giving back to the university by helping those who were previously in my shoes. As a former girl scout, I have experience in both things, and find them equally extremely rewarding.   ",
          "/reflection-subpages/code-dojo.html": "It is imperative that the teaching of programming begins at an early age as it will be an undeniably useful skill for them to learn as technology continues to advance at rapid speeds. Additionally, free public spaces are extremely important especially to kids who are from disadvantaged backgrounds who otherwise would not have access to structured educational activities and support outside of school hours. They might not have a ton of stimulation at home, or it might not be an environment conducive to learning. The club not only acts as a safe space for them to relax and socialize but offers oppurtuinites for both academic growth as well as personal development to those who might not otherwise have access to it. The most rewarding part of the entire experience was when I got to chat to some of their parents who said that the children really enjoyed attending the club and would miss having me leading it. That comment was very touching, and it really reinforced that even though I might not teach children in the future; pedagogy in general is something I want to look into more in the future.",
          "/reflection-subpages/course-rep.html": "Evidently I am not a Silicon Valley tech bro; I would like to think that I bring an unfamiliar perspective. If the internet is for everyone, the people creating the software should not all look alike and all have the same values and interests in mind.",
          "/reflection-subpages/grads4nottm.html": "This was a perfect opportunity to work in a group setting outside of term time, with students that aren’t necessarily from my year or course which makes it more interesting as well as challenging. I worked with a student in his final year, and he had a lot more knowledge than me and inspired me to focus now so I could be just as smart as him in his final year.  ",
          "/reflection-subpages/it-support.html": "I’m aware that the technological field could be argued is being used to advance humanity beyond our current physical form, some argue that we have already transcended it. There is no denying that technological advancement is inevitable however, I feel as though I am trying to desperately preserve humanity in a field that is constantly ignoring it. It is easy to dehumanize people when you're not sat in front of them and have the comofort of being 'anonymous' behind the screen. When I sit across from these people that I’m helping the connection and satisfaction that I feel increases by tenfold. I get to see the fruits of my labour, and that is something oftentimes I think we miss in this industry.",
          "/reflection-subpages/library-mentor.html": "The ability to express oneself is extremely important. Especially in the professional environment, written word is important skill to know, as you need to be able to write professional emails, and write proper code documentation.",
          "/reflection-subpages/achievement.html": " Giving back to the community is extremely improtatnt to me, even if I wasn’t raised in Nottingham, or this country I due feel indebted to this city as it’s been a great place to study. Plus humans are humans and we’re all connected. Even though sometimes as a species it might not feel like one big giant community, as oftentimes we are divided, most of our experience is unedeniably universal. Additionally, encouraging education is cruicial as it leads to certain oppurtunities in life that you would have an extremely difficult time getting access to otherwise. ",
          "/reflection-subpages/this-website.html": "A HTML / CSS page that merely states a brief introduction about me and lists a couple of hobbies feels stale, boring, and it has been done before numerous times. ChatGPT could automate a website for you using this format if you just enter in some basic details about yourself. People try to speed run getting to know each other through a quick game of 21 questions. As if that tells you anything about the person. Interrogation and willingly sharing aspects of yourself are two very different things . All good things come with time, why would you want to rush the beautiful process of getting to know someone?",
          "/reflection-subpages/trinity.html": "I wanted to explore educational settings outside of university and this was the perfect opportunity to do so. I wanted to see if teaching would be something I’d consider doing in the future.  ",


          "/tools-subpages/arch.html": "As I said in the description I used to use Windows but it never really felt like my system, eventually I got tired of having to install a bunch of pre-installed programs and made the switch. Windows also has though automatic updates which were a nightmare. First I tried out linux mint, but then I thought I should try something more advanced so I installed Arch. I was going to dual boot Arch with Windows but than I decided to just dive head first into the deep end and I completely wiped Windows off my laptop and solely have Arch on my partition. It was a deep learning curve but now I feel super comfortable in it so I think it paid off. Additionally, it is important to have Linux knoweldgee as well as most of the world runs on it (pretty much any server/embededd system runs it).",
          "/tools-subpages/graphene.html": " In hopes of degoogling I had to get a google pixel. Increasingly I'm finding that life is almost ironic and this is just one example of that. I use apps like Fdroid instead of the google play store to bypass the need for a google account. I dislike the fact that you're required to use a google account to do most things on the internet and I want to fight the monopoloy. This is just one of the many ways of resisting. ",
          "/tools-subpages/monero.html": "I know cryptocurrency gets a lot of bad rep and it’s all about hype, and equivalent to gambling but to me this isn’t about any of that. Having digital money is obviously the future that is why ensuring it is secure and anonymous is important. Eveyrthing is easily tracked online and you shouldn’t want people tracking all your financial transactions as that is a privacy nightmare.",
          "/tools-subpages/pi-hole.html": "It is highly customizable which I always like and is one of the many reasons as to why I run ARCH. Having control not only feels empowering but is required if you want to do anything technical. I prefer the internet before it was commodified and this allows me to try and replicate that. ",

        },

        "Lessons Learned": {
          "/reflection-subpages/lead-mentor.html": "That getting funding is a major constraint as spending money on things that are seemingly frivolous like pizza is hard to get, but it’s an important part of life to understand because the projects you will do in industry will need to be backed as well. You must be able to show results from them and it’s hard to quantify the results from these sorts of events as they’re primarily socially based yet I still try to do so nonetheless.  ",
          "/reflection-subpages/code-dojo.html": "When working with young children, a fundamental principle to uphold is the prioritization of fun above all else. This is particularly paramount, given that the young participants are voluntarily attending these educational sessions, possibly under some degree of parental encouragement or influence, but not mandated by any formal educational institution. In this non-academic setting, the emphasis on ensuring an enjoyable and engaging learning experience becomes all the more essential. By making learning enjoyable and exciting, we create an environment that not only sustains their interest but also fosters a genuine enthusiasm for the subject matter. Recognizing that these young learners have chosen to invest their time voluntarily, we acknowledge the importance of making their educational journey a source of delight, as this not only maximizes their retention of knowledge but also encourages them to continue explore programming. This is exactly why I attempt to make all the lessons extremely interactive and encourage them to befriend each other.",
          "/reflection-subpages/course-rep.html": "How important communication is, a lot of stuff could get lost in misinterpretation from the bottom up. Additionally, how important advocating for yourself is especialy within this industry, and I feel like I learned that a lot through this role. If you are a developer you need to be constantly selling your projects and making your presence known. Industry is not very meritocratic because the person with merit at coding and design might suck at soft skills and selling their work. ",
          "/reflection-subpages/grads4nottm.html": "Like all things in life you get what you put in. Our boss was busy so she didn't have a lot of face to face meetings with us; the daily stand ups were online. But I feel as though that should not have stopped me from developing a better relationship with her which is what I should have done so I could possibly ask for an internship or a future reference.",
          "/reflection-subpages/it-support.html": "You can learn from anyone, in any setting, if you are willing. The people I’m helping teach me a lot even if it’s not just merely technical knowledge. I learn from one specific elderly man named Mr. Browne, about life lessons in general and I’m extremely grateful for the wisdom he bestows upon me.",
          "/reflection-subpages/library-mentor.html": " A lot of the times people just want me to read over their assignments which is not necessarily bad, but I want to be able to teach them to learn how to find the mistakes and edit it properly themselves. This definitely alludes to the giving a man how to fish vs. teaching him how to fish analogy.",
          "/reflection-subpages/achievement.html": "In the assessment centre when the interviewer was writing down notes whilst I was answering the questions posed I remember it feeling a bit dehumanizing. It made me realise how important eye contact is and feeling as though you are being properly paid attention to. I obviously understand the circumstances, and that it is not personal but recognising that still did not help much in the moment. In the future, I must practise being more comfortable in these sorts of situations. These things should not factor into my ability to speak properly. It obviously did not make me fumble too much as I still landed the role but I still need to improve in this regard.",
          "/reflection-subpages/this-website.html": "Don’t reinvent the wheel. I removed unnecessary line breaks that I had due to my own aesthetic preferences, but I realise I should just follow the standard coding convention for each language. I think of it now like grammar / standardized formatting (in like scientific academic papers) or something like that. This way it’s easily readable and looks identical to other code (in terms of formatting). Followed naming conventions as well.  Additionally, it took me too long to figure out to use inspect element on my own code to debug it, and to not just open the files locally and instead run a live server using a VSCODE extension.  ",
          "/reflection-subpages/trinity.html": "I learned the same lesson that I learned in Code dojo: which was that I must ensure that I priortize fun above all else when working with children. Because if the children are not interested they will not be learning.",


          "/tools-subpages/arch.html": "Keeping backups is important. One time I had to Chroot in, but I didn’t have a spare USB so I had to go into the city buy one and rush home as I accidentally destroyed my system. That was one off, but it made me realise I should always have a live Arch USB drive with me that enables me to Chroot in on hand. I also perform system back ups now using Timeshift so lesson learned.  ",
          "/tools-subpages/graphene.html": " Privacy is not convenient whatsoever, and your choice is very limited in terms of FOSS apps. You must be able to strike a balance and you will never be perfectly secure no matter how hard you try.",
          "/tools-subpages/monero.html": "I also learned the importance of backing stuff up and know follow the (3-2-1) backup rule to ensure I do not lose my passphrase to my wallet. ",
          "/tools-subpages/pi-hole.html": "You must try to keep it up to date and regularly update the list as new ad domains and tracking are constantly being added. ",
        },

        "Goals": {
          "/reflection-subpages/lead-mentor.html": "To put in more effort into knowing other lead mentors within the department. I feel like the effectiveness of the program depends on our close relationships to one another. I already had other CERT mentor friends, so I tended to stick with them, which is fine, but the issue is I need to focus on developing closer relationships with specifically other Lead mentors to make collaborations within the department easier and more frequent.",
          "/reflection-subpages/code-dojo.html": "Unfortunately I had to stop running this club as the commute is now too far away since I moved accomodation for second year. Additionally, with the new timetable there is too many conflicts and I cannot attend the regular scheduled time. However, through being a Lead Mentor I was introduced to another Lead mentor who was a final year who is running one for his final year project in Clifton so I am assisting him with that instead. I hope to introduce even more children to Python and create an actual clear enganging lesson plan demonstrating the transferable concepts from Scratch.",
          "/reflection-subpages/course-rep.html": "Become a school officer, I could not this year as the position was already filled but I will try for it next year. I want to be more involved in the entire thing and you can only do that if you hold a position with more responsibility.",
          "/reflection-subpages/grads4nottm.html": "Apply again next year, and develop a stronger bond with the boss so you can ask for a future reference and or graduate internship.",
          "/reflection-subpages/it-support.html": "Help out at the central library once it opens: it's busier I can therefore make more of an impact. I want to create a workshop aimed at the elderly where they can come and they can help each other with queries they have whilst waiting for me to help them etc. and make friends with each other. It is way more  interactive and fun this way than just telling them to google answers to their solutions.",
          "/reflection-subpages/library-mentor.html": "My goal is to hold larger workshop sessions in the library where my students come together and peer review each other's work and help each other out. Primarily most of the work I do is 1:1 sessions, which I understand is still important but I want the social community building aspect too.",
          "/reflection-subpages/achievement.html": "I’m not sure if I will be able to do this specific role in my final year as it requires me to lose an entire school day. I want to try another different flexible position offered in the scheme titled Outreach Ambasaddor instead. Not that I didn't enjoy being an Achievement Coach I just recognise the need for more flexibility so I can focus on my final year project. Life is all about sacrifices, you cannot do everything afterall. Being able to prioritize what is important is a necessary skill, and this role is not necessarily directly applicable to my degree and future career though it undeniably has a ton of transferable soft skills.",
          "/reflection-subpages/this-website.html": "I want to turn this website into a blog and not just have a bunch of long text inside flexboxes. I plan on doing so using the REACT framework in specific because it would allow me to create reusable self-contained chunks of code and I find that appealing. I was sort of building a SPA without a SPA framework which was very tedious – and that’s exactly what REACT was made for so in the future I want to learn REACT and redo not only that piece of code () but the entire website as I understand it’s quite clunky. There’s a lot of text and I believe I have a lot of good quality content however it’s not visually enganging enough so most will not read it. ",
          "/reflection-subpages/trinity.html": "To create more interesting lesson plans in the future, as well as further explore a career in teaching.",


          "/tools-subpages/arch.html": "In the future I want further configure my system, using programming in specific. To do so I want to create my own privacy related dotfiles – which are essentially just user specific application configuration. This would be good programming practise and would actually be useful in my day to day.  ",
          "/tools-subpages/graphene.html": " I hope to be able to contribute to FOSS code and help develop graphene further. ",
          "/tools-subpages/monero.html": "I hope to one day be able to contribute something worthy to the GitHub. I am already a part of the element group chat full of the developers, but I have not had much time to fully understand the codebase. It gets quite complex especially if I do not have a thorough understanding of cryptography. However, this is something I would want to delve into learning more about in the future.  ",
          "/tools-subpages/pi-hole.html": "This isn't specific to pi-hole but more in regards to my raspberry pi in general. I want to use my pi as a Tor relay and for other privacy related matters in the future.  ",

        },

      };

      const pathName = Object.keys(sections[currentOption || "Description"]).find(path => location.pathname.endsWith(path));
      updatePara(sections[currentOption][pathName] || sections["Description"][pathName]);

    });

    container.append(subpageBtn); // elements appear where you append them
  });

};

const selectHeader = option => {

  currentOption = option;
  h2.textContent = currentOption;
  renderButtons();
};

selectHeader(currentOption);
renderButtons();

/* SUBPAGE MODAL IMAGES */
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg"); // get img
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src; // insert img inside of modal 
  captionText.innerHTML = this.alt; // use alt text as caption
}

var span = document.getElementsByClassName("close")[0]; /* get span element(X) that closes modal*/

span.onclick = function () { /* when user clicks on x button close modal */
  modal.style.display = "none";
}
