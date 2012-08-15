<!DOCTYPE html>
<html>
	<head>
		<title> Bicycle vs Bike vs Cars</title>
		<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/slider/assets/skins/sam/slider.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script type="text/javascript" src="//use.typekit.net/jhh2pxe.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		<style type="text/css">
*:focus
			{
			    outline: none;
			}
    #slider-bg,#slider-bg2,#slider-bg3 {
			    //background:url(images/slider-handle.png) 5px 0 no-repeat;
			}
			#slider-thumb,#slider-thumb2,#slider-thumb3{
			    left: 0;
			}
			.slider-handle{
				background:url(images/slider_handle.png) no-repeat 43% 120%;
				width:27px;
				height:27px;
				top: -8px !important;
				margin: 0px;
			}

			.slider-handle:hover{
				background:url(images/slider_handle.png) no-repeat 43% 0%;
				cursor: pointer;
			}
			.slider{
				position: relative;
				text-align: left;
				background: #D7D7D7;
				width:627px;
				height:8px;

				-moz-border-radius: 3px;
				-webkit-border-radius: 3px;
				border-radius: 3px;
			}

			.slider-a{
				margin-left: -28px;
				margin-top: 9px;
				display:block;
			}

			.slider-a li{
				float: left;
				margin-right: 12px;
				list-style-type: none;
				list-style-image: none;
				font-size: 12px;
			}

			.selection{
				cursor: pointer;
			}

			#compare-container
			{
				width:100%;				
				padding:5px;
				float:left;
			}

			#first-div{ float:left; margin-right:10px; }
			#second-div{ float:left; margin-right:10px;   }
			#third-div{float:left; }

			/*.first-head,.first-odd,.first-even,.second-head,.second-odd,.second-even,.third-head,.third-odd,.third-even
			{
				width:33%;

			}
			
			.first-head,.second-head,.third-head
			{	background-color: black;				
			}

			.first-odd,.second-odd,.third-odd
			{	background-color: #e4e7eb;				
			}*/

</style>
	</head>
	<body>
		<div id="wrap">
			<ul id="blocks">
				
				<li id="block1" class="blk">
					<!-- Type Selection Block -->
					<div style="position:relative;top:15%;">
						<div style="position:absolute;width:100%;">
						<div><span class="text-title">Choose your vehicle.</span><span class="steps">Step 1 of 2</span></div>
						<ul id="typeselection">
							<li id="bicycle" data-value="1" class="selection cycle"></li>
							<li id="bike" data-value="2" class="selection bike"></li>
							<li id="car" data-value="3" class="selection car"></li>
						</ul>
					</div>
					</div>
				</li>
				<li id="block2" class="blk">
					<!-- Distance, Fuel and other stuff -->
					<div style="border-top:1px solid #DFDFDF;">
						<div style="margin-top: 20px;"><span class="text-title">Slide approximate distance you travel everyday.</span><span class="steps">Step 2 of 2</span></div>
						<div class="slideblock">
							<div id="slider-bg" class="slider" tabindex="-1" title="Slide your distance">
			  					<div id="slider-thumb" class="slider-handle"></div>
							</div>
						</div>
						<div class="slidevalue">
							<span id="distancevalue">0</span> Kilometers
						</div>
						<div style="clear:both;">
							<p class="hideit">Pixel value: <span id="slider-value">0</span></p>
							<p class="hideit">Converted value:
							<input autocomplete="off" id="slider-converted-value" type="text" value="0" size="4" maxlength="4" />
							</p>
						</div>
						<div id="bike-car" style="display:none;">
							<div style="margin-top: 20px;"><span class="text-title" style="font-size:24px;">Also your average fuel usage</span></div>
							<div class="slideblock">
								<div id="slider-bg2" class="slider" tabindex="-1" title="Slider">
				  					<div id="slider-thumb2" class="slider-handle"></div>
								</div>
							</div>
							<div class="slidevalue">
								<span id="fuelvalue">0</span> KM/Litre
							</div>
							<div style="clear:both;">
							<p class="hideit">Pixel value: <span id="slider-value2">0</span></p>
							<p class="hideit">Your Average Fuel Usage:
							<input autocomplete="off" id="slider-converted-value2" type="text" value="0" size="4" maxlength="4" /> KM/Litre
							</p>
							</div>
						</div>
						<div>
							<div style="margin-top: 20px;"><span class="text-title" style="font-size:24px;">Also your average fuel usage</span></div>
							<div class="slideblock">
								<div id="slider-bg3" class="slider" tabindex="-1" title="Slider">
	  								<div id="slider-thumb3" class="slider-handle"></div>
								</div>
							</div>
							<div class="slidevalue">
								<span id="timehourvalue">0</span> Hour <span id="timeminvalue">0</span> Minutes
							</div>
							<div style="clear:both;">
							<p class="hideit">Pixel value: <span id="slider-value3">0</span>

							Time Spent:
							<input autocomplete="off" id="slider-converted-value3" type="text" value="0" size="4" maxlength="4" />Hours
							<input autocomplete="off" id="slider-converted-value4" type="text" value="0" size="4" maxlength="4" /> Minute
							<input autocomplete="off" id="slider-converted-value5" type="text" value="0" size="4" maxlength="4" /> 
							</p>
							</div>
							<div id="submitdata">SUBMIT</div>
						</div>
					</div>
				</li>
				
				<li id="block3" class="blk">
					<!-- Report -->
					<div style="border-top:1px solid #DFDFDF;">
						<div style="margin-top: 20px;"><span class="text-title">Report.</span><span class="steps">Final</span></div>
						<div id="compare-container">
							<div id="first-div" class="col">
								<label><img src="images/cycle_report.jpg" width="60%"/></label>	
								<div class="datablock" id="cycle_money">
									<h1>Money Spent</h1>
									<p><span id="cycle_cost" class="datavalue ">0</span> Rs.</p>
								</div>

								<div class="datablock" id="cy_speed">
									<h1>Speed</h1>
									<p><span id="cycle_speed" class="datavalue ">0</span> Km/hr</p>
								</div>	

								<div class="datablock" id="cy_calorie">
									<h1>Calorie</h1>
									<p><span id="cycle_calorie" class="datavalue green">0</span> Calories/day</p>
								</div>	
							</div>
							<div id="second-div" class="col">
								<label><img src="images/bike_report.jpg" width="60%"/></label>	
								<div class="datablock" id="cycle_money">
									<h1>Money Spent</h1>
									<p><span id="bike_cost" class="datavalue ">0</span> Rs.</p>
								</div>	
								<div class="datablock" id="bk_speed">
									<h1>Speed</h1>
									<p><span id="bike_speed" class="datavalue ">0</span> Km/hr</p>
								</div>
								<div class="datablock" id="bk_calorie">
									<h1>Calorie</h1>
									<p><span id="bike_calorie" class="datavalue red">0</span> Calories/day</p>
								</div>	

							</div>
							<div id="third-div" class="col">
								<label><img src="images/car_report.jpg" width="60%"/></label>	
								<div class="datablock" id="cycle_money">
									<h1>Money Spent</h1>
									<p><span id="car_cost" class="datavalue ">0</span> Km/hr</p>
								</div>
								<div class="datablock" id="cr_speed">
									<h1>Speed</h1>
									<p><span id="car_speed" class="datavalue ">0</span> Km/hr</p>
								</div>	
								<div class="datablock" id="cr_calorie">
									<h1>Calorie</h1>
									<p><span id="car_calorie" class="datavalue red">0</span> Calories/day</p>
								</div>	
							</div>
							<!--<table  id="compare-container" >
								<tr>
									<td  class="first-head" >Cycle</td>
									<td  class="second-head" >Bike</td>
									<td  class="third-head" >Car</td>
								</tr>	
								<tr>
									<td  class="first-odd" >Cycle</td>
									<td  class="second-odd" >Bike</td>
									<td  class="third-odd" >Car</td>
								</tr>	
								<tr>
									<td  class="first-even" >Cycle</td>
									<td  class="second-even" >Bike</td>
									<td  class="third-even" >Car</td>
								</tr>
								<tr>
									<td  class="first-odd" >Cycle</td>
									<td  class="second-odd" >Bike</td>
									<td  class="third-odd" >Car</td>
								</tr>	
								<tr>
									<td  class="first-even" >Cycle</td>
									<td  class="second-even" >Bike</td>
									<td  class="third-even" >Car</td>
								</tr>	
							</table>-->

						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- All the JS code falls here -->
		<script src="js/yui-min.js"></script>
		<!-- Slider skin (optional) --> 
		<!-- Dependencies --> 
		<script src="js/yahoo-dom-event.js"></script>
		<script src="js/dragdrop-min.js"></script>
		<!-- Slider source file --> 
		<script src="js/slider-min.js"></script>
		<script src="js/selector-min.js"></script>
		<script src="js/event-delegate-min.js"></script>
		<script src="js/animation-min.js"></script>
		<!-- Main Script -->
		<script src="boot2.js"></script>


		<!-- End of JS code -->
	</body>
</html>