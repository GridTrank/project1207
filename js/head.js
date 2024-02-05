class Head extends HTMLElement {
	constructor() {
		super()
		attributeChangedCallback(name, oldValue, newValue) {
			console.log(`属性 ${name} 已变更。`);
		}
		let h1 = ` 
        <div class="head_top f_row j_c_b">
        <div class="head_left f_row">
            <img src="./Elements/top-icon1.png" class="h_l_icon" />
            <span class="h_l_txt">Become Our Vendor / Vendor Login</span>
        </div>
        <div class="head_right f_row">
            <img src="./Elements/top-icon2.png" class="h_r_icon" />
            <span class="head_s1">Become Our Member</span>
            <span class="head_s2">/</span>
            <span class="head_s1">Member Login</span>
            <img src="./Elements/user-icon.png" class="user_icon" />
        </div>
    </div>
    <div class="head_logo_wrap f_row">
       <div class="logo-wrap"> 
			 <img src="./Elements/logo.png" class="logo" />
				<div class="icon">
					<img src="./Elements/menu_icon.png">
				</div>
				</div>
        <div class="label_list f_row"></div>
    </div>
    <div class="nav-box">
		<div class="nav_wrap f_row">
		        <div class="carousel-control-prev arrow_wrap"  data-bs-target="#carouselExample" data-bs-slide="prev">
		            <img src="./Elements/nav-left.png" class="arrow">
		        </div>
		        
		        <div class="nav_list_scroll">
		            <div class="nav_list f_row carousel slide" id="carouselExample" >
		               
		            </div>
		        </div>
		        <div class="carousel-control-next arrow_wrap"  data-bs-target="#carouselExample" data-bs-slide="next">
		            <img src="./Elements/nav-right.png" class="arrow">
		        </div>
		    </div>
				<div class="banner_wrap">
					<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0"
								class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
								aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
								aria-label="Slide 3"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src="./Elements/BB homepage_Blissful Pay banner.png" class="d-block w-100" alt="...">
							</div>
							<div class="carousel-item ">
								<img src="./Elements/BB homepage_Blissful Pay banner.png" class="d-block w-100" alt="...">
							</div>
							<div class="carousel-item ">
								<img src="./Elements/BB homepage_Blissful Pay banner.png" class="d-block w-100" alt="...">
							</div>
						</div>
					</div>
				</div>
		</div>
        `
		$('#head').append(h1)
		// 头部label
		let headLabelList = [{
				label: 'Banquet Price List',
				child: [{
						c_label: 'All Wedding Categories',
						icon: './Elements/2nd level Icons/All About Weddings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Florist & Stylist',
						icon: './Elements/2nd level Icons/Florists _ Stylists - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Travel & Honeymoon',
						icon: './Elements/2nd level Icons/Travel _ Honeymoon - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Balloons & Decorations',
						icon: './Elements/2nd level Icons/Balloons _ Decorations - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Furniture & Furnishings',
						icon: './Elements/2nd level Icons/Furniture _ Furnishings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Unique Services',
						icon: './Elements/2nd level Icons/Unique Services - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beauty & Wellness',
						icon: './Elements/2nd level Icons/Beauty _ Wellness - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hair & Makeup',
						icon: './Elements/2nd level Icons/Hair _ Makeup - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Favours & Stationerires',
						icon: './Elements/2nd level Icons/Wedding Favours _ Stationeries - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beverages & Wines',
						icon: './Elements/2nd level Icons/Beverages _ Wines - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hotels',
						icon: './Elements/2nd level Icons/Hotels - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Musicians',
						icon: './Elements/2nd level Icons/Wedding Musicians - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Bridal Boutiques',
						icon: './Elements/2nd level Icons/Bridal Boutiques - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Interior Designers & Contractors',
						icon: './Elements/2nd level Icons/Interior Designers _ Contractors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Photography',
						icon: './Elements/2nd level Icons/Wedding Photography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Cakes & Desserts',
						icon: './Elements/2nd level Icons/Cakes _ Desserts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Jewellery & Accessories',
						icon: './Elements/2nd level Icons/Jewellery _ Accessories - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Planners',
						icon: './Elements/2nd level Icons/Wedding Planners - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Car Rental',
						icon: './Elements/2nd level Icons/Car Rental - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Mobile Carts',
						icon: './Elements/2nd level Icons/Mobile Carts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Venues',
						icon: './Elements/2nd level Icons/Wedding Venues - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Caterers',
						icon: './Elements/2nd level Icons/Caterers - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Photobooth',
						icon: './Elements/2nd level Icons/Photobooth - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Videography',
						icon: './Elements/2nd level Icons/Wedding Videography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Chinese Wedding Traditions',
						icon: './Elements/2nd level Icons/Chinese Wedding Traditions - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Premium Vendors',
						icon: './Elements/2nd level Icons/Premium Vendors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Yacht',
						icon: './Elements/2nd level Icons/Yacht - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Country Clubs',
						icon: './Elements/2nd level Icons/Country Clubs - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Restaurant & Cafes',
						icon: './Elements/2nd level Icons/Restaurants _ Cafes - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Emcees',
						icon: './Elements/2nd level Icons/Emcees - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Tailors & Dresses',
						icon: './Elements/2nd level Icons/Tailors _ Dresses - Black.svg',
						url: '1212'
					},
				]
			},
			{
				label: 'Wedding Events & Contests',
				child: [{
						c_label: 'All Wedding Categories',
						icon: './Elements/2nd level Icons/All About Weddings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Florist & Stylist',
						icon: './Elements/2nd level Icons/Florists _ Stylists - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Travel & Honeymoon',
						icon: './Elements/2nd level Icons/Travel _ Honeymoon - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Balloons & Decorations',
						icon: './Elements/2nd level Icons/Balloons _ Decorations - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Furniture & Furnishings',
						icon: './Elements/2nd level Icons/Furniture _ Furnishings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Unique Services',
						icon: './Elements/2nd level Icons/Unique Services - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beauty & Wellness',
						icon: './Elements/2nd level Icons/Beauty _ Wellness - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hair & Makeup',
						icon: './Elements/2nd level Icons/Hair _ Makeup - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Favours & Stationerires',
						icon: './Elements/2nd level Icons/Wedding Favours _ Stationeries - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beverages & Wines',
						icon: './Elements/2nd level Icons/Beverages _ Wines - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hotels',
						icon: './Elements/2nd level Icons/Hotels - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Musicians',
						icon: './Elements/2nd level Icons/Wedding Musicians - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Bridal Boutiques',
						icon: './Elements/2nd level Icons/Bridal Boutiques - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Interior Designers & Contractors',
						icon: './Elements/2nd level Icons/Interior Designers _ Contractors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Photography',
						icon: './Elements/2nd level Icons/Wedding Photography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Cakes & Desserts',
						icon: './Elements/2nd level Icons/Cakes _ Desserts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Jewellery & Accessories',
						icon: './Elements/2nd level Icons/Jewellery _ Accessories - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Planners',
						icon: './Elements/2nd level Icons/Wedding Planners - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Car Rental',
						icon: './Elements/2nd level Icons/Car Rental - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Mobile Carts',
						icon: './Elements/2nd level Icons/Mobile Carts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Venues',
						icon: './Elements/2nd level Icons/Wedding Venues - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Caterers',
						icon: './Elements/2nd level Icons/Caterers - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Photobooth',
						icon: './Elements/2nd level Icons/Photobooth - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Videography',
						icon: './Elements/2nd level Icons/Wedding Videography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Chinese Wedding Traditions',
						icon: './Elements/2nd level Icons/Chinese Wedding Traditions - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Premium Vendors',
						icon: './Elements/2nd level Icons/Premium Vendors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Yacht',
						icon: './Elements/2nd level Icons/Yacht - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Country Clubs',
						icon: './Elements/2nd level Icons/Country Clubs - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Restaurant & Cafes',
						icon: './Elements/2nd level Icons/Restaurants _ Cafes - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Emcees',
						icon: './Elements/2nd level Icons/Emcees - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Tailors & Dresses',
						icon: './Elements/2nd level Icons/Tailors _ Dresses - Black.svg',
						url: '1212'
					},
				]
			},
			{
				label: 'Promotion',
				child: [{
						c_label: 'All Wedding Categories',
						icon: './Elements/2nd level Icons/All About Weddings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Florist & Stylist',
						icon: './Elements/2nd level Icons/Florists _ Stylists - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Travel & Honeymoon',
						icon: './Elements/2nd level Icons/Travel _ Honeymoon - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Balloons & Decorations',
						icon: './Elements/2nd level Icons/Balloons _ Decorations - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Furniture & Furnishings',
						icon: './Elements/2nd level Icons/Furniture _ Furnishings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Unique Services',
						icon: './Elements/2nd level Icons/Unique Services - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beauty & Wellness',
						icon: './Elements/2nd level Icons/Beauty _ Wellness - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hair & Makeup',
						icon: './Elements/2nd level Icons/Hair _ Makeup - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Favours & Stationerires',
						icon: './Elements/2nd level Icons/Wedding Favours _ Stationeries - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beverages & Wines',
						icon: './Elements/2nd level Icons/Beverages _ Wines - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hotels',
						icon: './Elements/2nd level Icons/Hotels - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Musicians',
						icon: './Elements/2nd level Icons/Wedding Musicians - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Bridal Boutiques',
						icon: './Elements/2nd level Icons/Bridal Boutiques - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Interior Designers & Contractors',
						icon: './Elements/2nd level Icons/Interior Designers _ Contractors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Photography',
						icon: './Elements/2nd level Icons/Wedding Photography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Cakes & Desserts',
						icon: './Elements/2nd level Icons/Cakes _ Desserts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Jewellery & Accessories',
						icon: './Elements/2nd level Icons/Jewellery _ Accessories - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Planners',
						icon: './Elements/2nd level Icons/Wedding Planners - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Car Rental',
						icon: './Elements/2nd level Icons/Car Rental - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Mobile Carts',
						icon: './Elements/2nd level Icons/Mobile Carts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Venues',
						icon: './Elements/2nd level Icons/Wedding Venues - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Caterers',
						icon: './Elements/2nd level Icons/Caterers - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Photobooth',
						icon: './Elements/2nd level Icons/Photobooth - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Videography',
						icon: './Elements/2nd level Icons/Wedding Videography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Chinese Wedding Traditions',
						icon: './Elements/2nd level Icons/Chinese Wedding Traditions - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Premium Vendors',
						icon: './Elements/2nd level Icons/Premium Vendors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Yacht',
						icon: './Elements/2nd level Icons/Yacht - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Country Clubs',
						icon: './Elements/2nd level Icons/Country Clubs - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Restaurant & Cafes',
						icon: './Elements/2nd level Icons/Restaurants _ Cafes - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Emcees',
						icon: './Elements/2nd level Icons/Emcees - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Tailors & Dresses',
						icon: './Elements/2nd level Icons/Tailors _ Dresses - Black.svg',
						url: '1212'
					},
				]
			},
			{
				label: 'Trending Wedding Ideas',
				child: [{
						c_label: 'All Wedding Categories',
						icon: './Elements/2nd level Icons/All About Weddings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Florist & Stylist',
						icon: './Elements/2nd level Icons/Florists _ Stylists - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Travel & Honeymoon',
						icon: './Elements/2nd level Icons/Travel _ Honeymoon - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Balloons & Decorations',
						icon: './Elements/2nd level Icons/Balloons _ Decorations - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Furniture & Furnishings',
						icon: './Elements/2nd level Icons/Furniture _ Furnishings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Unique Services',
						icon: './Elements/2nd level Icons/Unique Services - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beauty & Wellness',
						icon: './Elements/2nd level Icons/Beauty _ Wellness - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hair & Makeup',
						icon: './Elements/2nd level Icons/Hair _ Makeup - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Favours & Stationerires',
						icon: './Elements/2nd level Icons/Wedding Favours _ Stationeries - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beverages & Wines',
						icon: './Elements/2nd level Icons/Beverages _ Wines - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hotels',
						icon: './Elements/2nd level Icons/Hotels - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Musicians',
						icon: './Elements/2nd level Icons/Wedding Musicians - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Bridal Boutiques',
						icon: './Elements/2nd level Icons/Bridal Boutiques - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Interior Designers & Contractors',
						icon: './Elements/2nd level Icons/Interior Designers _ Contractors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Photography',
						icon: './Elements/2nd level Icons/Wedding Photography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Cakes & Desserts',
						icon: './Elements/2nd level Icons/Cakes _ Desserts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Jewellery & Accessories',
						icon: './Elements/2nd level Icons/Jewellery _ Accessories - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Planners',
						icon: './Elements/2nd level Icons/Wedding Planners - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Car Rental',
						icon: './Elements/2nd level Icons/Car Rental - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Mobile Carts',
						icon: './Elements/2nd level Icons/Mobile Carts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Venues',
						icon: './Elements/2nd level Icons/Wedding Venues - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Caterers',
						icon: './Elements/2nd level Icons/Caterers - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Photobooth',
						icon: './Elements/2nd level Icons/Photobooth - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Videography',
						icon: './Elements/2nd level Icons/Wedding Videography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Chinese Wedding Traditions',
						icon: './Elements/2nd level Icons/Chinese Wedding Traditions - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Premium Vendors',
						icon: './Elements/2nd level Icons/Premium Vendors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Yacht',
						icon: './Elements/2nd level Icons/Yacht - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Country Clubs',
						icon: './Elements/2nd level Icons/Country Clubs - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Restaurant & Cafes',
						icon: './Elements/2nd level Icons/Restaurants _ Cafes - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Emcees',
						icon: './Elements/2nd level Icons/Emcees - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Tailors & Dresses',
						icon: './Elements/2nd level Icons/Tailors _ Dresses - Black.svg',
						url: '1212'
					},
				]
			},
			{
				label: 'Vendors',
				child: [{
						c_label: 'All Wedding Categories',
						icon: './Elements/2nd level Icons/All About Weddings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Florist & Stylist',
						icon: './Elements/2nd level Icons/Florists _ Stylists - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Travel & Honeymoon',
						icon: './Elements/2nd level Icons/Travel _ Honeymoon - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Balloons & Decorations',
						icon: './Elements/2nd level Icons/Balloons _ Decorations - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Furniture & Furnishings',
						icon: './Elements/2nd level Icons/Furniture _ Furnishings - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Unique Services',
						icon: './Elements/2nd level Icons/Unique Services - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beauty & Wellness',
						icon: './Elements/2nd level Icons/Beauty _ Wellness - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hair & Makeup',
						icon: './Elements/2nd level Icons/Hair _ Makeup - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Favours & Stationerires',
						icon: './Elements/2nd level Icons/Wedding Favours _ Stationeries - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Beverages & Wines',
						icon: './Elements/2nd level Icons/Beverages _ Wines - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Hotels',
						icon: './Elements/2nd level Icons/Hotels - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Musicians',
						icon: './Elements/2nd level Icons/Wedding Musicians - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Bridal Boutiques',
						icon: './Elements/2nd level Icons/Bridal Boutiques - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Interior Designers & Contractors',
						icon: './Elements/2nd level Icons/Interior Designers _ Contractors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Photography',
						icon: './Elements/2nd level Icons/Wedding Photography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Cakes & Desserts',
						icon: './Elements/2nd level Icons/Cakes _ Desserts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Jewellery & Accessories',
						icon: './Elements/2nd level Icons/Jewellery _ Accessories - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Planners',
						icon: './Elements/2nd level Icons/Wedding Planners - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Car Rental',
						icon: './Elements/2nd level Icons/Car Rental - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Mobile Carts',
						icon: './Elements/2nd level Icons/Mobile Carts - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Venues',
						icon: './Elements/2nd level Icons/Wedding Venues - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Caterers',
						icon: './Elements/2nd level Icons/Caterers - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Photobooth',
						icon: './Elements/2nd level Icons/Photobooth - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Wedding Videography',
						icon: './Elements/2nd level Icons/Wedding Videography - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Chinese Wedding Traditions',
						icon: './Elements/2nd level Icons/Chinese Wedding Traditions - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Premium Vendors',
						icon: './Elements/2nd level Icons/Premium Vendors - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Yacht',
						icon: './Elements/2nd level Icons/Yacht - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Country Clubs',
						icon: './Elements/2nd level Icons/Country Clubs - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Restaurant & Cafes',
						icon: './Elements/2nd level Icons/Restaurants _ Cafes - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Emcees',
						icon: './Elements/2nd level Icons/Emcees - Black.svg',
						url: '1212'
					},
					{
						c_label: 'Tailors & Dresses',
						icon: './Elements/2nd level Icons/Tailors _ Dresses - Black.svg',
						url: '1212'
					},
				]
			},

		]
		let labelHtml = ''
		if (document.body.clientWidth >= 960) {
			for (var i = 0; i < headLabelList.length; i++) {
				labelHtml += `<div class= "dropdown_wrap" data-index=${i}>
                            <div data-bs-toggle="dropdown" class="label_item"> ${headLabelList[i].label}</div>
                            <div class="dropdown-menu" >
                                <div class="menu_list f_row">
                    `

				headLabelList[i].child.forEach((e) => {
					labelHtml += `<div class="menu_item f_row" data-url=${e.url} >
										                          <div class="menu_icon"><img  src="${e.icon || ''}" ></div>
										                          ${e.c_label}
										                      </div>`
				})


				labelHtml += ` </div>
            </div>
            </div>`
			}
			labelHtml += `<img src="./Elements/search.png" class="search"/>`
		} else {

			for (var i = 0; i < headLabelList.length; i++) {
				labelHtml += `<div class= "dropdown_wrap" data-index=${i}>
			                        <div class="label_item"> 
															${headLabelList[i].label}
															</div>
			                        <div class="dropdown-menu" >
			                            <div class="menu_list f_row">
			                `

				headLabelList[i].child.forEach((e) => {

					labelHtml += `<div class="menu_item" data-url=${e.url} >

														                          <div class="menu_icon"><img  src="${e.icon || ''}" ></div>

														                          ${e.c_label}

														                      </div>`
					labelHtml += ` </div>
																									    </div>
																									    </div>`

				})
				labelHtml += ` </div>
			        </div>
			        </div>`
			}
		}
		$('.label_list').append(labelHtml)
		$('.label_item').click(function(e) {
			$(this).addClass('active')
			$(this).siblings().removeClass('active')

		})
		$('.head_logo_wrap .icon').click(function(e) {
			console.log($('.label_list').hasClass('show'))
			if ($('.label_list').hasClass('show')) {
				$('.label_list').removeClass('show')
			} else {
				$('.label_list').addClass('show')
			}

		})
		$('.menu_item').click(function(e) {
			console.log(121212, $(this).attr('data-url'))

		})

		let navHtml = '<div class="carousel-inner">'
		if (document.body.clientWidth >= 960) {
			var newNavList = group(navList, 6)
			var toggle = 'data-bs-toggle="dropdown"'
		} else if (document.body.clientWidth > 480) {
			var newNavList = group(navList, 2)
			var toggle = ''
		} else {
			var newNavList = group(navList, 1)
			var toggle = ''
		}


		for (var i = 0; i < newNavList.length; i++) {
			navHtml += `
                <div class="carousel-item ${i===0?'active':''}" >
            `
			let cNavList = newNavList[i]

			for (var j = 0; j < cNavList.length; j++) {

				navHtml += `<div class= "dropdown_wrap " data-index=${j}>
                    <div ${toggle} class="nav_item " data-value=${cNavList[j].value} >
                        <img src="${cNavList[j].img}" class="nav_icon show_black">
                        <img src="${cNavList[j].whiteImg}" class="nav_icon show_white">
                    </div>
                    <div class="dropdown-menu">
                        <div class="menu_list f_row">
                    `
				cNavList[j].child.forEach((e) => {
					navHtml += `<div class="menu_item f_row" data-url=${e.url}>
                                        <div class="menu_icon" ><img src="${e.icon || ''}"></div>
                                        ${e.c_label}
                                    </div>`
				})
				navHtml += ` </div>  </div> </div>`
			}
			navHtml += ` </div>`

		}
		navHtml += '</div>'
		$('.nav_list').append(navHtml)

	}


}

function group(array, subNum) {
	let index = 0;
	let newArray = [];
	while (index < array.length) {
		newArray.push(array.slice(index, index += subNum));
	}
	return newArray;
}



window.onresize = function() {
	console.log(1221212121)
	window.customElements.define("page-head", Head)
}
window.customElements.define("page-head", Head)
