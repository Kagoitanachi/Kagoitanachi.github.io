<html>

<head>

<link rel="stylesheet" href = "index.css" type = text/css>

<html lang="en">

    <meta charset="UTF-8">
	
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
    <title>Button Example</title>
	
    <link rel="stylesheet" href="styles.css">
	

</head>

<body>

<div id="main_box" > 

	<div class="name">Petko Ivanov</div>
	
		<div id="Menu">
		
			<nav> <a href="#introduction"><div class="home">Home</div></a></nav>
			
			<nav> <a href="#colored-text"><div class="about">About</div></a></nav>
			
			<nav> <a href="#education"><div class="education">Education</div></a></nav>
			
			<nav> <a href="#projectText"><div class="projects">Projects</div></a></nav>
			
			<nav> <a href="#myskills"><div class="skills">Skills</div></a></nav>
			
			<nav><a href="#contactswithme"><div class="contact">Contacts</div></a></nav>
			
			<div class="image"></div>
			
		</div>
		
			<div id="introduction"><h2>Hello, my name's Petko Ivanov</h2></div>
			
			<div class="pydeveloper">Python Developer</div>
			
			<div class="information">Hello, my name is Petko Ivanov. I study computer
			languages from few years now, and I have good experiance with some of the
			best languages in development as you can see from my "skills". You can
			download my CV and my courses diplomas from here. I look forword to work with
			good companies and continue grow my carrer as a programmer. </div>
			
			 <a href="files/cv.rar"><button class="CV-button">Download CV</button></a>
			 
			 <a href="files/diploma.rar"><button class="Diploma-button">Download Diplomas</button></a>
			 
			 <div id="colored-text"><span class="white-text">About</span> <span class="blue-text">Me</span></div>
			 
			 <div class="secondImage"></div>
			 
			 <div class="aboutMeHead">Python Developer!</div>
			 
			 <div class = "AboutMeInformation">Hello guys, other then programming I am also in the sports, 
			 also I like to go outdoors , camping, concerts, and arts like drawing , or design. I love when I
			 visit other countries and cities , because every city have something beautiful and interesting to
			 see expecially when you are in vacation. Of the sports I really like fighting sports like Muay thai,
			 this sport is my favorite becasuse of the colture the country have. I also like to learn 3D programming
			 I already have finish animation with "AutoDesk Maya", I love to study new thing every day. One of the
			 favorite things I like to do in the weekend is to go out camping and drawing outside and just relax.
			 My favorite concerts to visit are Rock, Metal and Classical concerts also Ballets.</div>
			 
			
</div>

<div id="emailconteiner">

        <form action="send_email.php" method="post">
		
            <div class= "first_nameText"><label for="first_name">First Name:</label>
			
			<input type="text" id="first_name" name="first_name" required>
			
			</div>
            
            
            <div class="second_nameText"><label for="second_name">Last Name:</label>
			
            <input type="text" id="second_name" name="second_name" required>
			
			</div>
            
            <div class="emaelText"><label for="email">Email:</label>
			
            <input type="email" id="email" name="email" required>
			
			</div>
            
            <div class="subjectText"><label for="subject">Subject:</label>
			
            <input type="text" id="subject" name="subject" required>
			
			</div>
            
            <div class="textMessage"><label for="message">M<br>e<br>s</br>s<br>a<br>g<br>e</label>
			
            <textarea id="message" name="message" required></textarea><br><br>
			
			</div>
            
           <div class="button-container">
		   
                <button type="reset" class="button1">Clear</button>
				
				</div>
			
              <div class="button-container">
			  
			  <button type="send" class="button2">Send</button>
			  
			  </div>
			
			
        </form>
    </div>


<div id="info_box"> 

<div id="contactswithme"><span class="white-contacts">CONTACT</span> <span class="blue-contacts">WITH ME!</span></div>

 <div id="myskills"><span class="white-text2">MY</span> <span class="blue-text2">SKILLS</span></div>

	<div class="programinglanguages">Programing Languages!</div>
	
	<div class="foreignlanguages">Foreign Languages!</div>

	<div id= "ProgrammingLanguagesConteiners">

		<div class="HTML">HTML</div>

		<div class="html-conteiner">
			<div class="progressHTML">
				<span class="progress-textHTML">61%</span>
			</div>
		</div>
		
		<div class="css">CSS</div>
	
		<div class="css-conteiner">
				<div class="progressCss">
					<span class="progress-textCSS">74%</span>
				</div>
		</div>
		
		<div class="javascript">JavaScript</div>
		
		<div class="javascript-conteiner">
				<div class="progressJavascript">
					<span class="progress-textJavascript">47%</span>
				</div>
		</div>
		
		<div class="php">PHP</div>
		
		<div class="php-conteiner">
				<div class="progressphp">
					<span class="progress-textphp">32%</span>
				</div>
		</div>
		
		<div class="python">Python</div>
		
		<div class="python-conteiner">
				<div class="progresspython">
					<span class="progress-textpython">76%</span>
				</div>
		</div>
		
		<div class="java">Java</div>
		
		<div class="java-conteiner">
				<div class="progressjava">
					<span class="progress-textjava">56%</span>
				</div>
		</div>
		
		<div class="maya">Maya 3D</div>
		
		<div class="maya-conteiner">
				<div class="progressmaya">
					<span class="progress-textmaya">39%</span>
				</div>
		</div>
	
	</div>
	
	<div id="education"><span class="white-text3">MY</span> <span class="blue-text3">EDUCATION</span></div>
	
		<div id="educationContainer">
		
			<div class = "scroll-container2">
			
				<div class="scroll-content2">
		
		<div id="educationText1"><span class="blue-education1">University:</span> <span class="white-education1">Hello , I was study in technical university in Varna, Bulgaria for 6 semesters, But
		i had do stop for now. I think to continue , when i have more free time. If I find a remote work so I can work from home and not spend 2 hours to travel to work and back home I will 
		continue my education. I study Robotic and Mecatronic in the university. I had good grade , I even had a chance to continue my education in Japan with a exchange students program. </span></div>
		
		<div id="educationText2"><span class="blue-education2">High School:</span> <span class="white-education2">I finish second SOU "Neofit Bozveli" , in Varna , Bulgaria. It's not a special school.</span></div>
		
		<div id="educationText3"><span class="blue-education3">HTML and CSS Course:</span> <span class="white-education3">I finish a course for web development with HTML5 and CSS 3. In the course we learn
		how to make responsible web and a lot of great animation with CSS. Other then this web that I made as a portfolio, I will try to create a few more projects. You also can download my diploma from the
		botton "Download" next to this text.</span></div>
		
		<div id="educationText4"><span class="blue-education4">JavaScript:</span> <span class="white-education4">I finish a course for web development with HTML5 and CSS 3. In the course we learn
		how to make responsible web and a lot of great animation with CSS. Other then this web that I made as a portfolio, I will try to create a few more projects. You also can download my diploma from the
		botton "Download" next to this text.</span></div>
		
		<div id="educationText5"><span class="blue-education5">Python:</span> <span class="white-education5">I finish python fundamentals course in Dublin coding school. In this course we learn the basics with
		the language and we study data analys with python libraries "pandas" , "seaborn", "matplotlib" and a little bit of "NumPy" so we can do operations with the data set. As you can see of my projects this is
		the area I decided to start my jurney as a python developer.</span></div>
		
		<div id="educationText6"><span class="blue-education6">AutoDesk Maya 3D:</span> <span class="white-education6">I finish course with autodesk maya for animation and charectars creation. In this course
		I learn how to use the "Maya" tools , animations, a lot of materials even realistic materials, I learn how to use cameras , lighting of objects. I also learn rednering with "Arnold" render.</span></div>
		
		</div>
		
			</div>
		
		</div>
		
		<div id="projectText"><span class="white-text4">MY</span> <span class="blue-text4">PROJECTS</span></div>
		
		<div id="projectContainer">
		
		<div class = "scroll-container">
			
				<div class="scroll-content">
		
		<div class="project1"><span class="blue-PythonProject1">PYTHON - Data Analysist Project 1: </span> <span class="white-PythonProject1">
			
			In this project I create a custom DataFrame for a programmers
			and how they increase their projects by every year from 1 to 5 years of experiance, then I increase the salary , becasuse the programmers salary increase of every year of experiance.
			I create a pie char with all of the positions of the programmers, then I create a lineplot how their salary increase of the years. I also use barchar to see how much the salary icnrease
			for every position of the people. I use barchar again to see how much projects all of the people have for the 5 years. With the histogram I see how the projects are moving during the years,
			then with barplot i see how the projects are moving year by year , if they go up or down and with what procent. At the end I create one more barplot to see at the end of the 5 years jurney
			how much projects every of the people have, and use pandas ".describe" function to see the salary for the 1st , 3d and 5th year. You can download my code and presentation from the button "Download".</span> 
			
			 <div class="button-container">
			  
			  <a href="files/projects/project_1.rar"><button type="Download" class="DownloadProject1">Download</button></a>
			  
			  </div>
			
					</div>
					
					<div class="project2"><span class="blue-PythonProject2">PYTHON - Data Analysist Project 2: </span> <span class="white-PythonProject2">
			
			In this project I create a custom DataFrame for a programmers
			and how they increase their projects by every year from 1 to 5 years of experiance, then I increase the salary , becasuse the programmers salary increase of every year of experiance.
			I create a pie char with all of the positions of the programmers, then I create a lineplot how their salary increase of the years. I also use barchar to see how much the salary icnrease
			for every position of the people. I use barchar again to see how much projects all of the people have for the 5 years. With the histogram I see how the projects are moving during the years,
			then with barplot i see how the projects are moving year by year , if they go up or down and with what procent. At the end I create one more barplot to see at the end of the 5 years jurney
			how much projects every of the people have, and use pandas ".describe" function to see the salary for the 1st , 3d and 5th year. You can download my code and presentation from the button "Download".</span> 
			
			 <div class="button-container">
			  
			  <a href="files/projects/project_1.rar"><button type="Download" class="DownloadProject2">Download</button></a>
			  
			  </div>
			
					</div>
					
					<div class="project3"><span class="blue-PythonProject3">PYTHON - Data Analysist Project 3: </span> <span class="white-PythonProject3">
			
			In this project I create a custom DataFrame for a programmers
			and how they increase their projects by every year from 1 to 5 years of experiance, then I increase the salary , becasuse the programmers salary increase of every year of experiance.
			I create a pie char with all of the positions of the programmers, then I create a lineplot how their salary increase of the years. I also use barchar to see how much the salary icnrease
			for every position of the people. I use barchar again to see how much projects all of the people have for the 5 years. With the histogram I see how the projects are moving during the years,
			then with barplot i see how the projects are moving year by year , if they go up or down and with what procent. At the end I create one more barplot to see at the end of the 5 years jurney
			how much projects every of the people have, and use pandas ".describe" function to see the salary for the 1st , 3d and 5th year. You can download my code and presentation from the button "Download".</span> 
			
			 <div class="button-container">
			  
			  <a href="files/projects/project_1.rar"><button type="Download" class="DownloadProject3">Download</button></a>
			  
			  </div>
			
					</div>
					
					<div class="project4"><span class="blue-PythonProject4">PYTHON - Data Analysist Project 4: </span> <span class="white-PythonProject4">
			
			In this project I create a custom DataFrame for a programmers
			and how they increase their projects by every year from 1 to 5 years of experiance, then I increase the salary , becasuse the programmers salary increase of every year of experiance.
			I create a pie char with all of the positions of the programmers, then I create a lineplot how their salary increase of the years. I also use barchar to see how much the salary icnrease
			for every position of the people. I use barchar again to see how much projects all of the people have for the 5 years. With the histogram I see how the projects are moving during the years,
			then with barplot i see how the projects are moving year by year , if they go up or down and with what procent. At the end I create one more barplot to see at the end of the 5 years jurney
			how much projects every of the people have, and use pandas ".describe" function to see the salary for the 1st , 3d and 5th year. You can download my code and presentation from the button "Download".</span> 
			
			 <div class="button-container">
			  
			  <a href="files/projects/project_1.rar"><button type="Download" class="DownloadProject4">Download</button></a>
			  
			  </div>
			
					</div>
			
				</div>
			
			</div>
		
		</div>
	
	<div id= "SpokenLanguages">

		<div class="bulgarian">Bulgarian</div>

		<div class="bulgarian-conteiner">
			<div class="progressbulgarian">
				<span class="progress-textbulgarian">100%</span>
			</div>
		</div>
		
		<div class="english">English</div>
	
		<div class="english-conteiner">
				<div class="progressenglish">
					<span class="progress-textenglish">82%</span>
				</div>
		</div>
		
		<div class="czech">Czech</div>
		
		<div class="czech-conteiner">
				<div class="progressczech">
					<span class="progress-textczech">63%</span>
				</div>
		</div>
		
		<div class="slovakian">Slovakian</div>
		
		<div class="slovakian-conteiner">
				<div class="progressslovakian">
					<span class="progress-textslovakian">52%</span>
				</div>
		</div>
		
		<div class="russian">Russian</div>
		
		<div class="russian-conteiner">
				<div class="progressrussian">
					<span class="progress-textrussian">57%</span>
				</div>
		</div>
		
		<div class="japanese">Japanese</div>
		
		<div class="japanese-conteiner">
				<div class="progressjapanese">
					<span class="progress-textjapanese">still study</span>
				</div>
		</div>
		
		<div class="chinese">Chinese</div>
		
		<div class="chinese-conteiner">
				<div class="progresschinese">
					<span class="progress-textchinese">still study</span>
				</div>
		</div>
	
	</div>

</div>

</body>

</html>