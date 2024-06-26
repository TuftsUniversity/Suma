Suma new Client Upgrade Instructions
=============================

Overview
--------

This document outlines how to upgrade Suma to the new front end. Upgrading is only necessary if you have Suma installed. This upgrade will fix the WebSQL problem many users have been having. Since WebSQL is going to be deprecated you MUST upgrade the client.

The client should look and feel very similar to the previous client. Since we rebuilt the client we did make a few minor changes to the current behaivor. We also added some enhancements. Both of these are listed below.

Upgrade
-------

Depending upon your installation method, either copy the updated Suma files into place or pull the changes from GitHub (preferred).

Changes to current behavior
------

* No more introduction popup screen to "Start Collecting" when you start up the client or finish a session.
* When syncing data, multiple sessions are now sent with 1 consolidated summary rather than a separate pop up alert for each session.
* When a 'select one' response is selected you no longer have to unselect it before seleinstallcting a different option
* Switching back and forth between initiatives no longer hides the counts from the unsynced counts and keeps those counts in the same session. This only affects start/end time.
* Location navigation has been changed to a more intuitive expand/contract method of drilling down
* Suma will load the last active initiative rather than asking you to choose one every time (currently in development)
* Count and other buttons are now disabled until they can be used
* The initiative endTime has been changed to the timestamp of the last count instead of the time when the data was sent.


Enhancements
------
* Suma will work better on phones
* Initiative and location picker sidebar can now be hidden
* Tree view of locations allows users to view all locations for an initiative
* Added some configurable settings including:
	* Time/date display options at the top of the screen
	* Turning on/off the multiCount feature, which lets you record more than one count at a time
	* An option to display time of last recorded count at a location
	* A feature that would require all locations to be counted before allowing a "finish collecting" action (turned off by default)
* Added a "reset all counts at a location" button
* Activities and locations can now have descriptions added to them, and these are shown in the client through an information icon that can be tapped or hovered over
