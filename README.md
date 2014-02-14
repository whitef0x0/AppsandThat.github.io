clubsite
This is the official onepage website for the UBC "Apps and That" Club.

If you are member, please feel free to contribute. As of yet we are not using an CMS for this simple onepager, so if you wish to edit anything, please bear in mind that the content in 'index.html' will be the content seen by the browser

<<<<<<< HEAD
Main Files main.js - Javascript file that contains ScrollIt, Skroller and Headroom initializations. styles.css - the main CSS3 file for the site. This one has the highest p priority and will overwrite any styles set forth in any other CSS files (except for the ones set by Skroller)
=======
Main Files
	main.js - Javascript file that contains ScrollIt, Skroller and Headroom 		  initializations.
	styles.css - the main CSS3 file for the site. This one has the highest p		     priority and will overwrite any styles set forth in any 
		     other CSS files (except for the ones set by Skroller)


Dependencies

	JS Libraries
		BigSlide.JS
		Skrollr
		Jquery
		Jquery Address
		Venobox
		ScrollIt.JS
		HeadroomJS

	CSS/JS Libraries
		Semantic-UI
		Animate.css (daneden.me/animate)
	
	Symbols/Icon Sets
		Symbolset (symbolset.com)
			

Pushing it to Live Site
=======================
>>>>>>> 6e15dcd78778d035588ceff705a1fbc6205c7458

We are currently use GitHub's hosting solution to host the club's website. If you want to push changes to the site (after all problems are ironed out), add a seperate remote branch to your git repo and push accordingly
Command line instructions:

<<<<<<< HEAD
JS Libraries
    BigSlide.JS
    Skrollr
    Jquery
    Jquery Address
    Venobox
    ScrollIt.JS
    HeadroomJS

CSS/JS Libraries
    Semantic-UI
    Animate.css (daneden.me/animate)

Symbols/Icon Sets
    Symbolset (symbolset.com)
Pushing it to Live Site
We are currently use GitHub's hosting solution to host the club's website. If you want to push changes to the site (after all problems are ironed out), add a seperate remote branch to your git repo and push accordingly Command line instructions:

# git remote add ghpages https://github.com/AppsandThat/AppsandThat.github.io
# git remote update
# git add .
# git commit -m "your message here"
# git push remote ghpages
If this does not work then try this command and check to see if you get the similar output (below the command)

#git remote -v
OUTPUT: ghpages https://github.com/AppsandThat/AppsandThat.github.io (fetch) ghpages https://github.com/ApssandThat/AppsandThat.github.io (push) .... ....

If you do not get these two lines, most likely you have forgoten to run 'git remote update' or it may have failed. If you experience further problems, don't hesitate to look online, or you can post to the FB group (if you're really stuck then you can shoot me an email(david.chris.baldiwn[at]gmail[dot]com or FB message )
=======
	# git remote add ghpages https://github.com/AppsandThat/AppsandThat.github.io
	# git remote update
	# git add .
	# git commit -m "your message here"
	# git push remote ghpages
	
If this does not work then try this command and check to see if you get the similar output (below the command)

	#git remote -v
OUTPUT:
	ghpages https://github.com/AppsandThat/AppsandThat.github.io (fetch)
	ghpages https://github.com/ApssandThat/AppsandThat.github.io (push)
	....
	....
	
If you do not get these two lines, most likely you have forgoten to run 'git remote update' or it may have failed. If you experience further problems, don't hesitate to look online, or you can post to the FB group (if you're really stuck then you can shoot me an email(david.chris.baldiwn[at]gmail[dot]com or FB message )
	
>>>>>>> 6e15dcd78778d035588ceff705a1fbc6205c7458
