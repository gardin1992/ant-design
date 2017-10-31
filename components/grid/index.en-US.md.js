webpackJsonp([181,220],{983:function(e,t){e.exports={content:["section",["p","24 Grids System\u3002"],["h2","Design concept"],["div",{"class":"grid-demo"},["div",{"class":"ant-row demo-row"},["div",{"class":"ant-col-24 demo-col demo-col-1"},"\n    100%\n  "]],["div",{"class":"ant-row demo-row"},["div",{"class":"ant-col-6 demo-col demo-col-2"},"\n    25%\n  "],["div",{"class":"ant-col-6 demo-col demo-col-3"},"\n    25%\n  "],["div",{"class":"ant-col-6 demo-col demo-col-2"},"\n    25%\n  "],["div",{"class":"ant-col-6 demo-col demo-col-3"},"\n    25%\n  "]],["div",{"class":"ant-row demo-row"},["div",{"class":"ant-col-8 demo-col demo-col-4"},"\n    33.33%\n  "],["div",{"class":"ant-col-8 demo-col demo-col-5"},"\n    33.33%\n  "],["div",{"class":"ant-col-8 demo-col demo-col-4"},"\n    33.33%\n  "]],["div",{"class":"ant-row demo-row"},["div",{"class":"ant-col-12 demo-col demo-col-1"},"\n    50%\n  "],["div",{"class":"ant-col-12 demo-col demo-col-3"},"\n    50%\n  "]],["div",{"class":"ant-row demo-row"},["div",{"class":"ant-col-16 demo-col demo-col-4"},"\n    66.66%\n  "],["div",{"class":"ant-col-8 demo-col demo-col-5"},"\n    33.33%\n  "]]],["p","In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 aliquots."],["p","We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit."],["h2","Outline"],["p","In the grid system, we define the frame outside the information area based on ",["code","row"]," and ",["code","column"],", to ensure that every area can have stable arrangement."],["p","Following is a brief look at how it works:"],["ul",["li",["p","Establish a set of ",["code","column"]," in the horizontal space defined by ",["code","row"]," (abbreviated col)"]],["li",["p","Your content elements should be placed directly in the ",["code","col"],", and only ",["code","col"]," should be placed directly in ",["code","row"]]],["li",["p","The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by ",["code",".col-8"]," (",["code","span=8"],")."]],["li",["p","If the sum of ",["code","col"]," spans in a ",["code","row"]," are more than 24, then the overflowing ",["code","col"]," as a whole will start a new line arrangement."]]],["h2","Flex layout"],["p","Our grid systems support Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using ",["code","order"],"."],["p",'Flex layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.']],meta:{category:"Components",type:"Layout",cols:1,title:"Grid",filename:"components/grid/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Design-concept",title:"Design concept"},"Design concept"]],["li",["a",{className:"bisheng-toc-h2",href:"#Outline",title:"Outline"},"Outline"]],["li",["a",{className:"bisheng-toc-h2",href:"#Flex-layout",title:"Flex layout"},"Flex layout"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:"],["ul",["li",["p",["a",{title:null,href:"http://roylee0704.github.io/react-flexbox-grid/"},"react-flexbox-grid"]]],["li",["p",["a",{title:null,href:"https://github.com/whoisandy/react-blocks/"},"react-blocks"]]]],["h3","Row"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","align"],["td","the vertical alignment of the flex layout: ",["code","top"]," ",["code","middle"]," ",["code","bottom"]],["td","string"],["td",["code","top"]]],["tr",["td","gutter"],["td","spacing between grids"],["td","number"],["td","0"]],["tr",["td","justify"],["td","horizontal arrangement of the flex layout: ",["code","start"]," ",["code","end"]," ",["code","center"]," ",["code","space-around"]," ",["code","space-between"]],["td","string"],["td",["code","start"]]],["tr",["td","type"],["td","layout mode, optional ",["code","flex"],", ",["a",{title:null,href:"http://caniuse.com/#search=flex"},"browser support"]],["td","string"],["td"]]]],["h3","Col"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","offset"],["td","the number of cells to offset Col from the left"],["td","number"],["td","0"]],["tr",["td","order"],["td","raster order, used in ",["code","flex"]," layout mode"],["td","number"],["td","0"]],["tr",["td","pull"],["td","the number of cells that raster is moved to the left"],["td","number"],["td","0"]],["tr",["td","push"],["td","the number of cells that raster is moved to the right"],["td","number"],["td","0"]],["tr",["td","span"],["td","raster number of cells to occupy, 0 corresponds to ",["code","display: none"]],["td","number"],["td","none"]],["tr",["td","xs"],["td",["code","<768px"]," and also default setting, could be a ",["code","span"]," value or an object containing above props"],["td","number","|","object"],["td","-"]],["tr",["td","sm"],["td",["code","\u2265768px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number","|","object"],["td","-"]],["tr",["td","md"],["td",["code","\u2265992px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number","|","object"],["td","-"]],["tr",["td","lg"],["td",["code","\u22651200px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number","|","object"],["td","-"]],["tr",["td","xl"],["td",["code","\u22651600px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number","|","object"],["td","-"]]]],["p","The breakpoints of responsive grid follow ",["a",{title:null,href:"https://getbootstrap.com/docs/3.3/css/#responsive-utilities-classes"},"BootStrap 3 media queries rules"],"(not including ",["code","occasionally part"],")."]]}}});