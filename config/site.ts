export interface Service {
  name: string
  description: string
  category: string
  subcategory?: string
  image?: string
  imageAlt?: string
}

export interface ServiceCategory {
  name: string
  description: string
  services: Service[]
}

export const siteConfig = {
  businessName: 'Thread Stead Services',
  tagline: 'We Make Your Homestead Home',
  ownerName: 'Richard Threadgill',
  location: 'Greater Atlanta, GA',
  city: 'Greater Atlanta',
  state: 'GA',
  phone: '6787535776',
  email: 'info.threadstead@gmail.com',
  serviceAreas: [
    'Alpharetta',
    'Atlanta',
    'Austell',
    'Buford',
    'Canton',
    'Carroll County',
    'Carrollton',
    'Cherokee County',
    'Clayton County',
    'Cobb County',
    'College Park',
    'Conyers',
    'Coweta County',
    'Covington',
    'Cumming',
    'Dallas',
    'Dawson County',
    'DeKalb County',
    'Decatur',
    'Douglas County',
    'Douglasville',
    'Duluth',
    'East Point',
    'Fayette County',
    'Fayetteville',
    'Forest Park',
    'Forsyth County',
    'Fulton County',
    'Gwinnett County',
    'Griffin',
    'Hampton',
    'Henry County',
    'Hiram',
    'Jonesboro',
    'Kennesaw',
    'Lawrenceville',
    'Lithonia',
    'Locust Grove',
    'Mableton',
    'Marietta',
    'McDonough',
    'Newnan',
    'Norcross',
    'Paulding County',
    'Peachtree City',
    'Powder Springs',
    'Rockdale County',
    'Roswell',
    'Sandy Springs',
    'Smyrna',
    'Spalding County',
    'Stockbridge',
    'Stone Mountain',
    'Tucker',
    'Union City',
    'Villa Rica',
    'Woodstock',
  ],
  serviceCategories: [
    {
      name: 'Repair',
      description: 'Professional repair services for your home',
      services: [
        { name: 'TV Wall Mount Installation', description: 'Professional TV mounting with proper stud location, cable management, and leveling. We handle flat-screen TVs of all sizes, ensuring secure attachment to wall studs, hiding cables in-wall or with raceways, and achieving perfect viewing angles. Includes mounting bracket installation, electrical outlet placement if needed, and testing of all connections.', category: 'repair', subcategory: 'Interior Repair' },
        { name: 'Shelving Installation', description: 'Custom shelving installation using proper wall anchors and support systems. We install floating shelves, wall-mounted shelving units, closet organizers, and garage storage systems. Each installation is customized to your space, weight requirements, and aesthetic preferences, ensuring shelves are level, secure, and properly supported for their intended use.', category: 'repair', subcategory: 'Interior Repair' },
        { name: 'Ceiling Fan Installation and Replacement', description: 'Safe ceiling fan installation including electrical wiring, mounting bracket attachment, and blade balancing. We replace old fans, install new units, ensure proper electrical connections, and test all functions including light kits and remote controls. All work complies with electrical codes and includes proper support for fan weight.', category: 'repair', subcategory: 'Interior Repair' },
        { name: 'Picture Hanging', description: 'Professional picture and artwork hanging using appropriate hardware for wall type and artwork weight. We use proper anchors for drywall, plaster, or masonry, ensure level placement, create gallery walls with precise spacing, and handle valuable artwork with care. Includes measuring, marking, and hanging multiple pieces in coordinated arrangements.', category: 'repair', subcategory: 'Interior Repair' },
        { name: 'Bathroom Caulking', description: 'Expert bathroom caulking to seal gaps around tubs, showers, sinks, and toilets. We remove old, cracked caulk, clean surfaces thoroughly, apply mold-resistant silicone caulk, and create clean, watertight seals. This prevents water damage, mold growth, and maintains the integrity of your bathroom fixtures and surrounding areas.', category: 'repair', subcategory: 'Interior Repair' },
        { name: 'Window Frame Repair', description: 'Repair damaged or rotted window frames to restore structural integrity and weather resistance. We replace rotted wood, repair cracks and gaps, restore proper window operation, and improve energy efficiency. Includes sealing, painting, and ensuring windows open and close smoothly while maintaining weatherproofing.', category: 'repair', subcategory: 'Exterior Repair' },
        { name: 'Window and Door Weatherproofing', description: 'Comprehensive weatherproofing using weatherstripping, caulking, and sealants to eliminate drafts and improve energy efficiency. We seal gaps around windows and doors, install or replace weatherstripping, apply exterior caulking, and ensure proper insulation. This reduces energy costs and improves home comfort year-round.', category: 'repair', subcategory: 'Exterior Repair' },
        { name: 'Gutter Installation and Repair', description: 'Complete gutter services including new gutter installation, repair of sagging or damaged sections, downspout installation, and gutter cleaning. We ensure proper slope for water flow, secure attachment to fascia, and proper downspout placement to direct water away from your foundation. Includes debris removal and leak repair.', category: 'repair', subcategory: 'Exterior Repair' },
        { name: 'Garage Storage and Organization', description: 'Custom garage organization using wall-mounted systems, overhead storage, and floor solutions. We install pegboard systems, wall-mounted cabinets, overhead storage racks, and workbench systems. Each solution is designed to maximize your garage space, improve accessibility, and create an organized, functional workspace.', category: 'repair', subcategory: 'Garage Repair' },
      ],
    },
    {
      name: 'Drywall and Ceiling',
      description: 'Professional drywall and ceiling services',
      services: [
        { name: 'Drywall Patching and Repair', description: 'Expert drywall patching for holes, cracks, and damage from nails, anchors, or impacts. We cut clean edges, install backing when needed, apply multiple coats of joint compound with proper sanding between coats, and blend the repair seamlessly with existing walls. Includes texture matching to ensure the patch is invisible once painted.', category: 'drywall', subcategory: 'Walls and Ceilings' },
        { name: 'Drywall Finishing', description: 'Professional drywall finishing including taping, mudding, and texturing to match your existing walls. We apply joint compound, tape seams, create smooth finishes or match existing textures (orange peel, knockdown, smooth), and prepare surfaces for painting. Ensures seamless transitions between new and existing drywall.', category: 'drywall', subcategory: 'Walls and Ceilings' },
        { name: 'Drywall Installation', description: 'Complete drywall installation for new rooms, additions, or renovations. We hang drywall sheets, cut openings for outlets and fixtures, install corner beads, and prepare for finishing. Includes proper spacing, screw placement, and ensuring sheets are level and properly secured to studs and joists.', category: 'drywall', subcategory: 'Walls and Ceilings' },
        { name: 'Ceiling Repair and Replacement', description: 'Repair water-damaged, sagging, or cracked ceilings with professional results. We assess structural integrity, replace damaged sections, repair joist connections, and restore smooth, level ceilings. Includes texture matching and preparation for painting to ensure seamless repairs that match your existing ceiling.', category: 'drywall', subcategory: 'Walls and Ceilings' },
        { name: 'Popcorn Ceiling Removal', description: 'Safe removal of popcorn (acoustic) ceilings including testing for asbestos, proper containment, scraping, and refinishing. We protect your home and belongings, remove the texture material, repair any damage, and create a smooth finish ready for paint. Includes cleanup and disposal of removed materials.', category: 'drywall', subcategory: 'Walls and Ceilings' },
      ],
    },
    {
      name: 'Remodel',
      description: 'Complete remodeling services for your home',
      services: [
        { name: 'Bathroom Remodeling and Repair', description: 'Complete bathroom remodels including fixture replacement, tile work, plumbing updates, and layout changes. We handle everything from design consultation to final touches, including vanity installation, toilet replacement, shower/tub updates, flooring, lighting, and paint. Each project is customized to your needs, budget, and timeline.', category: 'remodel', subcategory: 'Bathroom' },
        { name: 'Vanity and Bathroom Mirror Installation', description: 'Professional bathroom vanity and mirror installation with proper plumbing connections and secure mounting. We install wall-mounted and freestanding vanities, connect plumbing fixtures, install medicine cabinets and mirrors, ensure level placement, and test all connections. Includes proper sealing and finishing touches.', category: 'remodel', subcategory: 'Bathroom' },
        { name: 'Bathtub Repair and Replacement', description: 'Expert bathtub services including repair of chips, cracks, and leaks, complete replacement, and professional refinishing. We repair damaged surfaces, replace worn-out tubs with proper plumbing connections, and refinish existing tubs to restore their appearance. All work includes proper sealing and water testing.', category: 'remodel', subcategory: 'Bathroom' },
        { name: 'Shower Tile Installation and Repair', description: 'Professional shower tile installation and repair for watertight, beautiful results. We install new tile showers with proper waterproofing, repair damaged or loose tiles, regrout and seal existing showers, and ensure proper slope for drainage. Includes tile selection assistance and custom designs for unique shower spaces.', category: 'remodel', subcategory: 'Bathroom' },
        { name: 'Kitchen Remodeling and Repair', description: 'Complete kitchen remodels including cabinet installation, countertop replacement, appliance installation, and layout improvements. We handle cabinet refacing or replacement, countertop installation, backsplash work, flooring updates, and fixture installation. Each project is planned to minimize disruption and maximize functionality.', category: 'remodel', subcategory: 'Kitchen' },
        { name: 'Kitchen Backsplash Installation', description: 'Beautiful backsplash installation using tile, stone, or other materials to protect walls and enhance your kitchen aesthetic. We measure and cut tiles precisely, create custom patterns and designs, ensure proper adhesion and grouting, and seal surfaces for easy cleaning. Includes design consultation to match your kitchen style.', category: 'remodel', subcategory: 'Kitchen' },
        { name: 'Cabinet Installation and Repair', description: 'Professional cabinet services including new installation, repair of damaged cabinets, door and drawer adjustments, and hardware replacement. We install base and wall cabinets with proper leveling and securing, repair broken hinges and drawers, replace damaged doors, and ensure smooth operation of all cabinet components.', category: 'remodel', subcategory: 'Kitchen' },
        { name: 'Countertop Installation and Repair', description: 'Expert countertop installation and repair for granite, quartz, laminate, and other materials. We measure and template precisely, install countertops with proper support, cut openings for sinks and cooktops, seal seams, and repair chips or cracks. Includes edge finishing and proper sealing for durability.', category: 'remodel', subcategory: 'Kitchen' },
        { name: 'Basement Remodeling and Repair', description: 'Transform unfinished or damaged basements into usable living spaces. We handle framing, drywall installation, flooring, lighting, and finishing work. Includes moisture assessment, proper insulation, egress window considerations, and creating functional spaces like home theaters, offices, or additional bedrooms.', category: 'remodel', subcategory: 'Rooms and Other Services' },
        { name: 'Home Office Remodeling and Repair', description: 'Create productive home office spaces with custom built-ins, proper lighting, electrical outlets, and soundproofing. We install built-in desks and shelving, add electrical outlets for equipment, improve lighting, install sound-dampening materials, and create organized, functional workspaces tailored to your needs.', category: 'remodel', subcategory: 'Rooms and Other Services' },
      ],
    },
    {
      name: 'Window and Door Services',
      description: 'Professional window and door installation and repair',
      services: [
        { name: 'Window Installation and Replacement', description: 'Energy-efficient window replacement including removal of old windows, proper installation of new units, sealing, and trim work. We measure precisely, install windows with proper flashing and insulation, ensure smooth operation, and finish with interior and exterior trim. Includes energy-efficient options to reduce heating and cooling costs.', category: 'windows-doors', subcategory: 'Windows' },
        { name: 'Window Screen Repair and Replacement', description: 'Professional window screen repair and replacement for all window types. We repair torn or damaged screens, replace screen mesh, repair or replace frames, and ensure proper fit. Includes custom sizing for non-standard windows and installation of pet-resistant or security screens when needed.', category: 'windows-doors', subcategory: 'Windows' },
        { name: 'Exterior Door Installation and Replacement', description: 'Secure exterior door installation including front doors, back doors, and side entry doors. We remove old doors, install new units with proper weatherstripping, adjust hardware for smooth operation, install deadbolts and locks, and ensure proper sealing. Includes threshold installation and weatherproofing for energy efficiency and security.', category: 'windows-doors', subcategory: 'Doors' },
        { name: 'Interior Door Installation and Repair', description: 'Professional interior door services including new door installation, repair of damaged doors, hardware replacement, and door adjustment. We install pre-hung doors, repair holes and damage, replace hinges and handles, adjust doors for proper fit and operation, and ensure smooth opening and closing without sticking or rubbing.', category: 'windows-doors', subcategory: 'Doors' },
        { name: 'Patio Door Installation and Repair', description: 'Expert sliding and French patio door installation and repair for seamless indoor-outdoor access. We install new patio doors, repair damaged tracks and rollers, replace glass panels, adjust doors for smooth operation, and install proper weatherstripping. Includes screen door installation and maintenance.', category: 'windows-doors', subcategory: 'Doors' },
        { name: 'Storm Door Installation and Replacement', description: 'Protective storm door installation to add an extra layer of insulation and security. We measure and install storm doors that fit properly, adjust closers and latches, install screens for ventilation, and ensure proper weatherstripping. Storm doors protect your main door, improve energy efficiency, and provide additional security.', category: 'windows-doors', subcategory: 'Doors' },
      ],
    },
    {
      name: 'Floor Installation and Repair',
      description: 'Professional flooring services',
      services: [
        { name: 'Floor Tile Installation and Repair', description: 'Expert ceramic, porcelain, and natural stone tile installation with proper subfloor preparation, layout, and grouting. We install tile floors in bathrooms, kitchens, and entryways, repair cracked or loose tiles, regrout worn grout lines, and seal surfaces. Includes pattern design, precise cutting, and professional finishing for beautiful, durable results.', category: 'flooring', subcategory: 'Tile and Vinyl' },
        { name: 'Vinyl Flooring Installation and Repair', description: 'Durable vinyl flooring installation including sheet vinyl, luxury vinyl plank (LVP), and luxury vinyl tile (LVT). We prepare subfloors, install underlayment when needed, cut and fit flooring precisely, seam sheets properly, and install transitions. Includes repair of tears, bubbles, and damaged sections in existing vinyl floors.', category: 'flooring', subcategory: 'Tile and Vinyl' },
        { name: 'Laminate Floor Installation and Repair', description: 'Beautiful laminate flooring installation with proper underlayment and expansion gaps. We install click-lock laminate flooring, cut and fit around obstacles, install transitions and moldings, and ensure proper floating floor installation. Includes repair of damaged planks, replacement of warped sections, and maintenance of locking mechanisms.', category: 'flooring', subcategory: 'Wood and Laminate' },
        { name: 'Wood Floor Installation and Repair', description: 'Professional hardwood floor installation, repair, and refinishing services. We install solid and engineered hardwood, repair damaged boards, replace warped or cupped sections, sand and refinish existing floors, and apply protective finishes. Includes proper acclimation, subfloor preparation, and finishing with stains and polyurethane.', category: 'flooring', subcategory: 'Wood and Laminate' },
      ],
    },
    {
      name: 'Painting',
      description: 'Interior and exterior painting services',
      services: [
        { name: 'Interior Painting', description: 'Professional interior painting with proper surface preparation, primer application, and multiple coats for lasting results. We paint walls, ceilings, trim, and doors using quality paints and techniques. Includes furniture and floor protection, clean edges, and smooth finishes. We handle color changes, accent walls, and complete room makeovers.', category: 'painting', subcategory: 'Interior Painting' },
        { name: 'Exterior Painting', description: 'Expert exterior painting to protect your home from weather damage and enhance curb appeal. We prepare surfaces by scraping, sanding, and priming, apply weather-resistant paints, and ensure proper coverage. Includes painting siding, trim, shutters, and doors. We use quality exterior paints designed to withstand sun, rain, and temperature changes.', category: 'painting', subcategory: 'Exterior Painting' },
        { name: 'Deck Painting and Staining', description: 'Protect and enhance your deck with professional cleaning, preparation, and application of deck stains or paints. We clean decks thoroughly, remove old finishes, sand rough areas, and apply weather-resistant stains or paints. Includes proper drying time and application techniques to ensure long-lasting protection against UV rays and moisture.', category: 'painting', subcategory: 'Exterior Painting' },
        { name: 'Fence Painting and Staining', description: 'Extend the life of your wood fence with professional cleaning, preparation, and application of protective stains or paints. We clean fences to remove dirt and mildew, sand rough areas, and apply weather-resistant finishes. Proper staining protects against rot, UV damage, and extends fence lifespan while maintaining its appearance.', category: 'painting', subcategory: 'Exterior Painting' },
        { name: 'Cabinet Painting and Refinishing', description: 'Transform your kitchen or bathroom cabinets with professional painting and refinishing. We remove doors and hardware, clean and sand surfaces, apply primer and multiple coats of paint, and reinstall with new hardware if desired. Includes proper preparation for a smooth, durable finish that resists chipping and wear in high-use areas.', category: 'painting', subcategory: 'Interior Painting' },
      ],
    },
    {
      name: 'Carpentry Installation and Repair',
      description: 'Expert carpentry services',
      services: [
        { name: 'Deck and Patio Construction', description: 'Custom deck and patio construction including design, permits, framing, decking installation, railings, and stairs. We build pressure-treated, composite, or cedar decks with proper structural support, proper spacing, and code compliance. Includes post installation, joist framing, deck board installation, and finishing touches like railings and stairs.', category: 'carpentry', subcategory: 'Exterior Carpentry' },
        { name: 'Deck and Patio Repair and Service', description: 'Professional deck and patio repair including replacing rotted boards, repairing loose railings, fixing wobbly stairs, and reinforcing structural elements. We assess deck safety, replace damaged components, tighten hardware, and restore structural integrity. Includes inspection and recommendations for maintenance to extend deck life.', category: 'carpentry', subcategory: 'Exterior Carpentry' },
        { name: 'Fence Installation and Repair', description: 'Complete fence installation and repair for privacy, security, and property boundaries. We install wood, vinyl, and metal fences with proper post setting, level installation, and gate installation. Includes repair of damaged sections, post replacement, gate adjustments, and fence line restoration. All work ensures proper alignment and durability.', category: 'carpentry', subcategory: 'Exterior Carpentry' },
        { name: 'Custom Shelving', description: 'Custom built-in shelving solutions designed and installed to fit your exact space and storage needs. We build wall-mounted and freestanding shelving units, install closet organizers, create display shelves, and design storage solutions for any room. Includes proper support, level installation, and finishing to match your decor.', category: 'carpentry', subcategory: 'Interior Carpentry' },
        { name: 'Custom Bookcases', description: 'Beautiful custom bookcase installation designed to organize and display your book collection. We build floor-to-ceiling bookcases, wall-mounted units, and freestanding cases with adjustable shelves, proper weight support, and aesthetic appeal. Includes design consultation to create bookcases that complement your room and accommodate your collection.', category: 'carpentry', subcategory: 'Interior Carpentry' },
        { name: 'Crown Molding Installation and Repair', description: 'Elegant crown molding installation and repair to add architectural character to your home. We measure and cut precise mitered corners, install molding with proper nailing techniques, repair damaged sections, and match existing profiles. Includes caulking, filling nail holes, and painting for seamless integration with your ceiling and walls.', category: 'carpentry', subcategory: 'Interior Carpentry' },
        { name: 'Baseboard Installation and Repair', description: 'Professional baseboard and trim installation and repair to finish your floors and walls beautifully. We install baseboards, door trim, window casings, and other interior trim work with precise mitered corners, proper nailing, and seamless joints. Includes repair of damaged trim, replacement of rotted sections, and painting or staining to match your decor.', category: 'carpentry', subcategory: 'Interior Carpentry' },
        { name: 'Trim Installation and Repair', description: 'Expert interior and exterior trim work including baseboards, door casings, window trim, crown molding, and decorative trim. We measure and cut precise angles, install trim with proper fastening, repair damaged sections, and finish with caulking and paint. All trim work is customized to match your home\'s style and architectural details.', category: 'carpentry', subcategory: 'Interior Carpentry' },
      ],
    },
    {
      name: 'Plumbing',
      description: 'Professional plumbing services',
      services: [
        { name: 'Faucet Repair and Replacement', description: 'Expert faucet services including repair of leaks, drips, and low water pressure, and complete faucet replacement. We fix cartridge issues, replace O-rings and seals, repair sprayer attachments, and install new faucets with proper connections. Includes shut-off valve installation, proper sealing, and testing for leaks. Handles kitchen, bathroom, and utility faucets.', category: 'plumbing', subcategory: 'Repair and Replace' },
        { name: 'Sink Repair and Replacement', description: 'Professional sink services including installation of new sinks, repair of cracks and chips, replacement of damaged sinks, and fixing drain connections. We install drop-in, undermount, and vessel sinks, repair or replace damaged basins, fix drain assemblies, and ensure proper sealing. Includes garbage disposal installation and connection when needed.', category: 'plumbing', subcategory: 'Repair and Replace' },
        { name: 'Toilet Repair and Replacement', description: 'Reliable toilet services including repair of running toilets, clogs, leaks, and wobbly bases, and complete toilet replacement. We replace flappers, fill valves, and flush mechanisms, repair tank cracks, fix base leaks, and install new toilets with proper wax ring sealing. Includes testing and adjustment for proper operation.', category: 'plumbing', subcategory: 'Repair and Replace' },
        { name: 'Drain Repair and Replacement', description: 'Expert drain services including snaking clogs, hydro-jetting, repair of damaged drain pipes, and replacement of corroded sections. We clear kitchen, bathroom, and main line clogs, repair broken pipes, replace damaged sections, and restore proper drainage. Includes camera inspection when needed to identify problems and ensure complete resolution.', category: 'plumbing', subcategory: 'Repair and Replace' },
        { name: 'Plumbing Leak Detection', description: 'Professional leak detection using advanced equipment to locate hidden leaks in walls, floors, and underground pipes. We identify water leaks that cause high utility bills, water damage, or mold growth. Includes pressure testing, thermal imaging, and moisture detection to pinpoint leaks without unnecessary demolition, saving time and repair costs.', category: 'plumbing', subcategory: 'Other Plumbing Services' },
      ],
    },
    {
      name: 'Lighting and Electrical',
      description: 'Safe electrical and lighting services',
      services: [
        { name: 'Light Fixture Installation and Repair', description: 'Professional light fixture services including installation of chandeliers, pendant lights, ceiling fans with lights, wall sconces, and outdoor lighting. We safely wire fixtures, mount them securely, repair damaged fixtures, replace bulbs and components, and ensure proper operation. All electrical work is code-compliant and includes proper grounding.', category: 'electrical', subcategory: 'Lighting' },
        { name: 'Recessed Lighting Installation and Service', description: 'Modern recessed (can) lighting installation including cutting ceiling holes, running wiring, installing housings and trim, and connecting to switches. We install new recessed lights, replace old fixtures, upgrade to LED, and repair non-functioning lights. Includes proper spacing for even illumination and dimmer switch installation when desired.', category: 'electrical', subcategory: 'Lighting' },
        { name: 'Light Switch Installation and Repair', description: 'Safe and reliable light switch services including installation of standard, dimmer, timer, and smart switches. We replace old or faulty switches, install multi-way switches for three-way circuits, upgrade to dimmers, and repair switches that don\'t work properly. All work includes proper wiring, grounding, and code compliance.', category: 'electrical', subcategory: 'Electrical Services and Installation' },
        { name: 'Outlet Installation and Replacement', description: 'Professional electrical outlet services including installation of new outlets, replacement of old or damaged outlets, GFCI outlet installation for safety, and USB outlet installation for convenience. We upgrade two-prong to three-prong outlets, add outlets where needed, and ensure proper wiring and grounding. All work meets electrical code requirements.', category: 'electrical', subcategory: 'Electrical Services and Installation' },
        { name: 'Smoke Detector Installation and Replacement', description: 'Essential smoke detector installation and replacement to meet safety codes and protect your family. We install hardwired and battery-operated smoke detectors, replace old or expired units, test existing detectors, and ensure proper placement throughout your home. Includes interconnection of detectors so all alarms sound when one detects smoke.', category: 'electrical', subcategory: 'Carbon Monoxide and Smoke Detector' },
        { name: 'Carbon Monoxide Detector Installation and Replacement', description: 'Protect your family from carbon monoxide poisoning with professional CO detector installation. We install CO detectors near bedrooms and fuel-burning appliances, replace expired units, test existing detectors, and ensure proper placement. CO detectors are essential safety devices that alert you to dangerous levels of this odorless, colorless gas.', category: 'electrical', subcategory: 'Carbon Monoxide and Smoke Detector' },
      ],
    },
    {
      name: 'Assembly Service',
      description: 'Professional assembly services',
      services: [
        { name: 'Furniture Assembly', description: 'Expert furniture assembly for all types including bedroom sets, dining room furniture, office furniture, and ready-to-assemble (RTA) items. We follow manufacturer instructions precisely, use proper tools, ensure all connections are secure, and level furniture properly. Includes cleanup of packaging materials and testing of drawers, doors, and moving parts.', category: 'assembly', subcategory: 'Furniture' },
        { name: 'Cabinet Assembly', description: 'Professional cabinet assembly and installation for kitchen and bathroom cabinets, storage cabinets, and built-in units. We assemble flat-pack cabinets, install wall and base cabinets with proper leveling and securing, install doors and drawers, and mount hardware. Includes proper alignment, spacing, and ensuring all components function correctly.', category: 'assembly', subcategory: 'Furniture' },
        { name: 'Grill Assembly', description: 'Safe and proper grill assembly including gas, charcoal, and electric grills. We assemble grills following manufacturer instructions, connect gas lines safely (when applicable), install burners and grates, attach side shelves and accessories, and test all functions. Includes proper setup, safety checks, and instruction on proper use and maintenance.', category: 'assembly', subcategory: 'Patio and Yard' },
      ],
    },
  ],
  // Legacy services array for backward compatibility
  services: [
    {
      name: 'General Home Repair Services',
      description: 'From fixing leaky faucets to assembling furniture, we handle all your everyday home maintenance needs.',
      category: 'home-repair',
    },
    {
      name: 'Drywall Repair & Patching',
      description: 'Professional drywall repair, patching holes, and texture matching to restore your walls seamlessly.',
      category: 'home-repair',
    },
    {
      name: 'Plumbing Repairs',
      description: 'Fixing leaks, unclogging drains, replacing fixtures, and handling minor plumbing emergencies.',
      category: 'home-repair',
    },
    {
      name: 'Electrical Work',
      description: 'Safe electrical repairs, outlet installation, light fixture replacement, and basic wiring.',
      category: 'home-repair',
    },
    {
      name: 'Deck & Patio Construction',
      description: 'Building and repairing decks, patios, and outdoor living spaces to enhance your home.',
      category: 'construction',
    },
    {
      name: 'Fence Installation & Repair',
      description: 'New fence installation, repairs, and maintenance for privacy, security, and property value.',
      category: 'construction',
    },
    {
      name: 'Painting & Staining',
      description: 'Interior and exterior painting, staining decks and fences, and color consultation.',
      category: 'home-repair',
    },
    {
      name: 'Tile Installation',
      description: 'Professional tile installation for bathrooms, kitchens, and floors with attention to detail.',
      category: 'construction',
    },
    {
      name: 'Carpentry',
      description: 'Custom shelving, built-ins, trim work, and fine woodworking to match your style.',
      category: 'construction',
    },
    {
      name: 'Emergency Repairs',
      description: '24/7 emergency response for urgent home repairs that can\'t wait until business hours.',
      category: 'emergency',
    },
  ],
  faqs: [
    {
      question: 'Why do homeowners need home repair services?',
      answer: "What's on your to-do list? Most homeowners have a number of repair projects around the house that never seem to get done. Sometimes, it's because they lack the tools or the skills to do the job properly. Often, it's because they can't find the time in their busy schedule. This is when it's time to call Thread Stead Services! We handle everything from small repairs to major improvements, so you can focus on what matters most.",
    },
    {
      question: 'How quickly can you respond to service requests?',
      answer: 'We understand that some repairs can\'t wait. We offer fast response times and can often schedule same-day or next-day service for urgent repairs. For non-emergency projects, we work with you to find a convenient time that fits your schedule.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed and insured. We carry comprehensive liability insurance to protect you and your property. All of our work is backed by our commitment to quality and customer satisfaction.',
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Absolutely! We offer free, no-obligation estimates for all projects. We\'ll assess your needs, provide a detailed estimate, and answer any questions you have before you commit to anything.',
    },
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      location: 'McDonough, GA',
      rating: 5,
      text: 'Outstanding work and professionalism. Fixed our deck and it looks brand new. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      location: 'Stockbridge, GA',
      rating: 5,
      text: 'Quick response time and fair pricing. They handled our plumbing emergency on a weekend. Very reliable.',
    },
    {
      name: 'Lisa Martinez',
      location: 'Locust Grove, GA',
      rating: 5,
      text: 'Did a complete bathroom renovation. The attention to detail was impressive. Will definitely use again.',
    },
    {
      name: 'David Thompson',
      location: 'Hampton, GA',
      rating: 5,
      text: 'Professional, clean, and efficient. Fixed multiple issues around the house. Great communication throughout.',
    },
    {
      name: 'Jennifer Williams',
      location: 'McDonough, GA',
      rating: 5,
      text: 'Best home repair service we\'ve used. Honest, skilled, and always on time. Our go-to for home repairs.',
    },
  ],
  yearsExperience: 10,
}

