var tracks = [
	      { trackName: "track1",
		trackType: "stranded",
		visible: true,
		inner_radius: 40,
		outer_radius: 140,
		trackFeatures: "complex",
		featureThreshold: 29903,
		mouseover_callback: 'islandPopup',
		mouseout_callback: 'islandPopupClear',
		linear_mouseclick: 'linearPopup',
		showLabels: true,
		showTooltip: true,
		linear_mouseclick: 'linearClick',
		items: [
                         {id: 4, start:25270,end:26050, name:"ORF3a protein", strand: 1},
												 {id: 4, start:25717,end:25984, name:"ORF4a protein", strand: -1},
                         {id: 8, start:27201,end:27387, name:"ORF6 protein", strand: -1, extraclass: "outermembrane"},
                         {id: 9, start:27393,end:27759, name:"ORF7a protein", strand: 1, extraclass: "innermembrane"},
                         {id: 10, start:27893,end:28259, name:"ORF8 protein", strand: -1, extraclass: "extrashelluar"},
                         {id: 20, start: 29557, end: 29674, name: "ORF10 protein", strand: -1, feature: "terminator"}
			]
		},
		{ trackName: "track3",
trackType: "stranded",
visible: true,
inner_radius: 230,
outer_radius: 270,
trackFeatures: "complex",
featureThreshold: 29903,
mouseover_callback: 'islandPopup',
mouseout_callback: 'islandPopupClear',
linear_mouseclick: 'linearPopup',
showLabels: true,
showTooltip: true,
linear_mouseclick: 'linearClick',
items: [
										 {id: 1, start:0, end:265, name:"5'UTR", strand: -1},
										 {id: 21, start: 29674, end:29903, name:"3'UTR", strand: -1, feature:"arrow"}
	]
},
				{ trackName: "track2",
		visible: true,
		trackType: "stranded",
		inner_radius: 150,
		outer_radius: 250,
		centre_line_stroke: "grey",
		mouseover_callback: 'islandPopup',
		mouseout_callback: 'islandPopupClear',
		linear_mouseclick: 'linearPopup',
		showLabels: true,
		showTooltip: true,
		linear_mouseclick: 'linearClick',

		items: [
			{id: 2, start:265,end:13401, name:"Replicase1A", strand: 1},
			{id: 2, start:13400,end:21485, name:"Replicase1B", strand: -1},
			{id: 3, start:21743,end:25253, name:"surface glycoprotein", strand: 1},
			{id: 5, start:26244,end:26472, name:"envelope protein",strand: 1},
			{id: 6, start:26522,end:27191, name:"membrane glycoprotein", strand: -1},
			{id: 11, start:28273,end:29533, name:"nucleocapsid phosphoprotein", strand: -1, extraclass: "lostinspace"},
		]
	}
      ];
