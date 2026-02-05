interface FAQ {
  question: string
  answer: string
}

export function getServiceFAQs(serviceName: string, category: string, subcategory?: string): FAQ[] {
  const faqs: Record<string, FAQ[]> = {
    'TV Wall Mount Installation': [
      {
        question: 'What size TVs can you mount?',
        answer: 'We can mount flat-screen TVs of all sizes, from small 32-inch models to large 85-inch screens. The mounting system we use depends on your TV size and weight, ensuring proper support and safety. We\'ll assess your TV specifications and wall type to determine the best mounting solution.',
      },
      {
        question: 'Do you hide the cables?',
        answer: 'Yes! We offer cable management solutions including in-wall cable running (where possible), cable raceways that blend with your wall, and proper organization of all connections. This creates a clean, professional look without visible wires hanging down from your TV.',
      },
      {
        question: 'How long does TV mounting take?',
        answer: 'Most TV wall mount installations take 1-2 hours, depending on the complexity. This includes finding studs, installing the mount, mounting the TV, running cables, and testing all connections. If in-wall cable running is needed, it may take slightly longer.',
      },
      {
        question: 'Can you mount a TV on any wall?',
        answer: 'We can mount TVs on most wall types including drywall, plaster, brick, and concrete. The mounting method varies by wall type - drywall requires finding studs, while masonry may require special anchors. We\'ll assess your wall and use the appropriate mounting hardware for a secure installation.',
      },
    ],
    'Shelving Installation': [
      {
        question: 'What types of shelving can you install?',
        answer: 'We install all types of shelving including floating shelves, wall-mounted units, closet organizers, garage storage systems, and built-in shelving. Each type requires different installation techniques, and we\'ll choose the right method based on your wall type and weight requirements.',
      },
      {
        question: 'How much weight can the shelves hold?',
        answer: 'Weight capacity depends on the shelving type, wall material, and mounting method. We assess your needs and install appropriate support systems. Floating shelves typically hold 20-50 pounds per shelf, while wall-mounted units with proper stud attachment can hold much more. We\'ll discuss your storage needs to ensure adequate support.',
      },
      {
        question: 'Do you install custom-sized shelving?',
        answer: 'Yes! We can install custom-sized shelving tailored to your exact space and needs. Whether you need shelves for a specific closet, garage area, or display space, we\'ll measure precisely and install shelving that fits perfectly and maximizes your storage capacity.',
      },
      {
        question: 'How long does shelving installation take?',
        answer: 'Installation time varies by project size. A simple wall-mounted shelf takes about 30-60 minutes, while a complete closet organizer system may take 2-4 hours. We\'ll provide a time estimate during your free consultation based on the scope of your project.',
      },
    ],
    'Ceiling Fan Installation and Replacement': [
      {
        question: 'Do you handle the electrical wiring?',
        answer: 'Yes, we handle all electrical aspects of ceiling fan installation including wiring connections, switch installation, and ensuring proper electrical codes are met. All electrical work is done safely and professionally, with proper grounding and connections.',
      },
      {
        question: 'Can you install a ceiling fan where there\'s no existing fixture?',
        answer: 'Yes, we can install ceiling fans in locations without existing fixtures. This requires running new electrical wiring from a power source, which we can do safely and to code. We\'ll discuss the best location and wiring approach during your consultation.',
      },
      {
        question: 'How do you ensure the fan is balanced?',
        answer: 'We test fan operation after installation and use balancing kits if needed. Proper installation with secure mounting and correct blade attachment usually prevents wobbling. If any wobble occurs, we\'ll adjust and balance the fan until it runs smoothly and quietly.',
      },
      {
        question: 'Do you install remote controls and light kits?',
        answer: 'Yes! We install and program remote controls for ceiling fans, install light kits, and ensure all functions work properly. This includes wiring light kits, programming remotes, and testing all fan speeds and light functions.',
      },
    ],
    'Picture Hanging': [
      {
        question: 'What types of artwork can you hang?',
        answer: 'We can hang all types of artwork including framed pictures, canvas art, mirrors, shadow boxes, and gallery walls. Each type requires different hanging hardware based on weight and wall type. We use appropriate anchors and hardware to ensure secure, level hanging.',
      },
      {
        question: 'Do you create gallery walls?',
        answer: 'Yes! We specialize in creating gallery walls with precise spacing and alignment. We\'ll help you plan the layout, measure for perfect spacing, and hang all pieces level and evenly spaced. This creates a professional, cohesive look for your art collection.',
      },
      {
        question: 'How do you handle valuable artwork?',
        answer: 'We take extra care with valuable artwork, using museum-quality hanging systems when appropriate. We assess the weight and value of each piece and use the most secure, appropriate hanging method. We handle all artwork with care and use proper protection during installation.',
      },
      {
        question: 'Can you hang items on different wall types?',
        answer: 'Yes, we can hang artwork on drywall, plaster, brick, concrete, and other wall types. Each wall type requires different anchors and installation methods. We\'ll assess your walls and use the appropriate hardware for secure, damage-free installation.',
      },
    ],
    'Bathroom Caulking': [
      {
        question: 'Why is bathroom caulking important?',
        answer: 'Proper caulking prevents water from seeping behind fixtures and into walls, which can cause mold, rot, and structural damage. It also maintains a clean appearance and prevents water from damaging your bathroom. Regular caulking maintenance is essential for bathroom longevity.',
      },
      {
        question: 'How often should bathroom caulk be replaced?',
        answer: 'Caulk typically needs replacement every 3-5 years, or when you notice cracking, discoloration, or gaps. In high-moisture areas, it may need more frequent attention. We\'ll assess your caulk condition and recommend replacement when needed to prevent water damage.',
      },
      {
        question: 'What type of caulk do you use?',
        answer: 'We use high-quality, mold-resistant silicone caulk specifically designed for bathrooms. This type of caulk is waterproof, flexible, and resists mold and mildew growth. It creates a durable, long-lasting seal that maintains its integrity in moist bathroom environments.',
      },
      {
        question: 'Do you remove old caulk first?',
        answer: 'Yes, proper caulking requires complete removal of old, damaged caulk. We carefully remove all old caulk, clean and dry the surfaces thoroughly, and then apply new caulk. This ensures proper adhesion and prevents mold growth under the new caulk.',
      },
    ],
    'Window Frame Repair': [
      {
        question: 'What causes window frame damage?',
        answer: 'Window frames can be damaged by water exposure, rot, insect damage, impact, or age-related wear. Common issues include rotted wood, cracked frames, gaps that allow air and water infiltration, and frames that no longer hold windows securely.',
      },
      {
        question: 'Can you repair rotted window frames?',
        answer: 'Yes, we can repair rotted window frames by removing damaged wood, treating remaining wood, and replacing rotted sections. For extensive rot, we may recommend partial or complete frame replacement. We\'ll assess the damage and recommend the best solution to restore window function and appearance.',
      },
      {
        question: 'Will repaired frames match my existing windows?',
        answer: 'We work to match your existing window frames as closely as possible. This includes matching wood type, paint color, and style. For painted frames, we\'ll match the paint color. We aim to make repairs blend seamlessly with your existing windows.',
      },
      {
        question: 'How does frame repair improve energy efficiency?',
        answer: 'Repairing damaged frames eliminates gaps and cracks that allow air infiltration, reducing drafts and energy loss. Properly sealed frames work with weatherstripping to create an airtight seal, improving your home\'s energy efficiency and reducing heating and cooling costs.',
      },
    ],
    'Window and Door Weatherproofing': [
      {
        question: 'How much can weatherproofing save on energy bills?',
        answer: 'Proper weatherproofing can reduce energy costs by 10-20% by eliminating drafts and air leaks. The exact savings depend on your home\'s current condition and climate. Weatherproofing is one of the most cost-effective ways to improve energy efficiency.',
      },
      {
        question: 'What materials do you use for weatherproofing?',
        answer: 'We use high-quality weatherstripping materials, silicone and acrylic caulks, door sweeps, and sealants appropriate for each application. Materials are chosen based on the location (interior vs. exterior) and the type of gap or opening being sealed.',
      },
      {
        question: 'How long does weatherproofing last?',
        answer: 'Weatherproofing materials typically last 3-10 years depending on the material type and exposure. Exterior weatherstripping may need replacement more frequently due to weather exposure. We\'ll recommend materials based on your needs and provide maintenance guidance.',
      },
      {
        question: 'Can you weatherproof all types of windows and doors?',
        answer: 'Yes, we can weatherproof all types of windows (single-hung, double-hung, casement, sliding) and doors (entry doors, sliding doors, French doors). Each type requires specific weatherproofing techniques, and we\'ll use the appropriate methods for your specific windows and doors.',
      },
    ],
    'Gutter Installation and Repair': [
      {
        question: 'How do I know if my gutters need repair or replacement?',
        answer: 'Signs include sagging gutters, water overflow, leaks at joints, detached downspouts, or visible damage. If gutters are more than 20 years old or have extensive damage, replacement may be more cost-effective than repeated repairs. We\'ll assess your gutters and recommend the best solution.',
      },
      {
        question: 'What gutter materials do you install?',
        answer: 'We install aluminum, vinyl, steel, and copper gutters. Aluminum is the most popular due to its durability, lightweight, and cost-effectiveness. We\'ll help you choose the best material based on your budget, home style, and local climate conditions.',
      },
      {
        question: 'Do you clean gutters as part of the service?',
        answer: 'Yes, we clean gutters as part of installation and repair services. Regular cleaning prevents clogs and extends gutter life. We remove debris, flush gutters and downspouts, and ensure proper water flow. We can also set up a maintenance schedule for ongoing gutter care.',
      },
      {
        question: 'How important is proper gutter slope?',
        answer: 'Proper slope is critical for gutter function. Gutters should slope toward downspouts at about 1/4 inch per 10 feet. Incorrect slope causes water to pool, overflow, or not drain properly. We ensure proper slope during installation to maximize gutter effectiveness.',
      },
    ],
    'Garage Storage and Organization': [
      {
        question: 'What storage solutions do you offer?',
        answer: 'We install wall-mounted systems (pegboard, slatwall), overhead storage racks, floor storage solutions, workbenches, and custom-built storage. We\'ll assess your garage space and needs to design a system that maximizes storage while maintaining accessibility and organization.',
      },
      {
        question: 'Can you work with my existing garage layout?',
        answer: 'Yes, we design storage solutions that work with your existing garage layout, including accommodating vehicles, work areas, and other uses. We\'ll create a plan that maximizes storage without interfering with your garage\'s primary functions.',
      },
      {
        question: 'How much can overhead storage hold?',
        answer: 'Overhead storage racks typically hold 200-600 pounds depending on the system and installation. We ensure proper mounting to ceiling joists for maximum weight capacity. We\'ll discuss your storage needs and install a system with appropriate capacity.',
      },
      {
        question: 'Do you install electrical outlets for workbenches?',
        answer: 'Yes, we can install additional electrical outlets for workbenches and garage tools. This includes running new circuits if needed and installing outlets at convenient locations for your work area. All electrical work is done to code and safely.',
      },
    ],
    'Drywall Patching and Repair': [
      {
        question: 'Will the patch be visible after painting?',
        answer: 'When done properly, drywall patches should be completely invisible after painting. We use proper techniques including multiple coats of joint compound, careful sanding, and texture matching. The key is proper preparation, feathering edges, and matching the existing wall texture.',
      },
      {
        question: 'How do you match existing wall texture?',
        answer: 'We analyze your existing wall texture (smooth, orange peel, knockdown, etc.) and replicate it using matching techniques. This may involve spraying, rolling, or troweling texture to match. We test texture on a small area first to ensure a perfect match before completing the repair.',
      },
      {
        question: 'What size holes can you patch?',
        answer: 'We can patch holes of any size, from small nail holes to large damaged areas. Small holes (under 6 inches) are patched directly, while larger areas may require backing material or partial drywall replacement. We\'ll assess the damage and use the appropriate repair method.',
      },
      {
        question: 'How long does it take for patches to dry?',
        answer: 'Joint compound typically dries in 24 hours, but we apply multiple coats with drying time between each. A typical patch repair takes 2-3 days including drying time. We\'ll provide a timeline based on the size and complexity of your repair.',
      },
    ],
    'Drywall Finishing': [
      {
        question: 'What is drywall finishing?',
        answer: 'Drywall finishing includes taping seams, applying joint compound (mudding), sanding, and texturing to create a smooth, finished surface ready for paint. This is the process that makes new drywall look seamless and professional.',
      },
      {
        question: 'How many coats of joint compound are needed?',
        answer: 'Typically 2-3 coats are needed for proper finishing. The first coat embeds the tape, the second coat covers the tape and fills low spots, and the third coat (if needed) creates a smooth finish. Each coat is sanded before the next is applied.',
      },
      {
        question: 'Can you match my existing wall texture?',
        answer: 'Yes, we specialize in matching existing textures including orange peel, knockdown, smooth, and other textures. We\'ll analyze your existing texture and replicate it so new drywall blends seamlessly with existing walls.',
      },
      {
        question: 'How long does the finishing process take?',
        answer: 'Finishing time depends on the area size and number of coats needed. A typical room takes 2-4 days including drying time between coats. We\'ll provide a timeline based on your specific project scope.',
      },
    ],
    'Drywall Installation': [
      {
        question: 'What thickness of drywall do you use?',
        answer: 'We typically use 1/2-inch drywall for walls and 5/8-inch for ceilings, though thickness may vary based on local codes and specific needs. We\'ll determine the appropriate thickness based on your project requirements and building codes.',
      },
      {
        question: 'How do you ensure drywall is level and plumb?',
        answer: 'We use levels and straight edges to ensure drywall sheets are installed level and plumb. Proper installation includes checking stud alignment, using shims if needed, and ensuring sheets are properly secured. This creates smooth, professional-looking walls.',
      },
      {
        question: 'Do you handle electrical and plumbing cutouts?',
        answer: 'Yes, we cut precise openings for electrical outlets, switches, light fixtures, and plumbing fixtures. We measure carefully and cut clean openings that fit fixtures properly. This is done before or during installation depending on the project.',
      },
      {
        question: 'What spacing do you use between drywall sheets?',
        answer: 'Drywall sheets should have a small gap (about 1/8 inch) between them, which is filled with joint compound during finishing. This gap allows for expansion and prevents cracking. We ensure proper spacing during installation for a professional finish.',
      },
    ],
    'Ceiling Repair and Replacement': [
      {
        question: 'What causes ceiling damage?',
        answer: 'Ceiling damage can be caused by water leaks, roof problems, structural settling, age, or impact. Common issues include water stains, sagging, cracks, texture damage, or complete failure. We assess the cause to prevent future problems.',
      },
      {
        question: 'How do you repair water-damaged ceilings?',
        answer: 'We first identify and fix the water source, then remove damaged drywall, treat for mold if present, replace damaged sections, and refinish. It\'s crucial to address the water source first to prevent recurring damage. We\'ll ensure the area is completely dry before repairs.',
      },
      {
        question: 'Can you match my existing ceiling texture?',
        answer: 'Yes, we match existing ceiling textures including popcorn, smooth, textured, or other finishes. We\'ll analyze your ceiling texture and replicate it so repairs blend seamlessly. For popcorn ceilings, we can match the texture or offer removal and refinishing.',
      },
      {
        question: 'How long does ceiling repair take?',
        answer: 'Repair time varies by damage extent. Simple patching takes 1-2 days, while extensive replacement may take 3-5 days including drying time. We\'ll provide a timeline based on your specific ceiling damage and repair needs.',
      },
    ],
    'Popcorn Ceiling Removal': [
      {
        question: 'Why remove popcorn ceilings?',
        answer: 'Popcorn ceilings are often removed for aesthetic reasons (modern, clean look), easier cleaning, and to update home appearance. They can also trap dust and be difficult to repair. Removal creates a smooth, modern ceiling surface.',
      },
      {
        question: 'Do you test for asbestos?',
        answer: 'Popcorn ceilings installed before 1980 may contain asbestos. We recommend testing before removal, especially in older homes. If asbestos is present, we can refer you to certified asbestos removal specialists. Safety is our priority.',
      },
      {
        question: 'What happens after removal?',
        answer: 'After removal, we repair any damage, apply joint compound to smooth the surface, sand, and prepare for paint or texture. The ceiling can be left smooth or textured to match your preference. We\'ll discuss options during your consultation.',
      },
      {
        question: 'How messy is the removal process?',
        answer: 'We take extensive measures to contain the mess including plastic sheeting, sealing off the work area, and using proper cleanup methods. While some dust is inevitable, we minimize it and clean thoroughly afterward. Your home will be protected during the process.',
      },
    ],
    'Bathroom Remodeling and Repair': [
      {
        question: 'How long does a bathroom remodel take?',
        answer: 'A typical bathroom remodel takes 2-4 weeks depending on scope. Simple updates may take 1-2 weeks, while complete remodels with layout changes may take 4-6 weeks. We\'ll provide a detailed timeline based on your specific project.',
      },
      {
        question: 'Do you handle permits?',
        answer: 'Yes, we handle all necessary permits for bathroom remodels. Permits are typically required for plumbing and electrical work, structural changes, or major renovations. We\'ll determine what permits are needed and obtain them before starting work.',
      },
      {
        question: 'Can you work with my existing bathroom layout?',
        answer: 'Yes, we can work within your existing layout or help redesign it. Layout changes require more work (plumbing and electrical relocation) but can significantly improve functionality. We\'ll discuss options and costs during your consultation.',
      },
      {
        question: 'What\'s included in a bathroom remodel?',
        answer: 'A complete remodel can include fixture replacement, tile work, vanity installation, lighting updates, plumbing work, electrical updates, flooring, paint, and more. We\'ll work with you to determine what\'s included based on your needs and budget.',
      },
    ],
    'Vanity and Bathroom Mirror Installation': [
      {
        question: 'Do you install both wall-mounted and freestanding vanities?',
        answer: 'Yes, we install both types. Wall-mounted vanities require proper wall support and mounting, while freestanding vanities need level installation and proper plumbing connections. We\'ll help you choose the best type for your space and install it properly.',
      },
      {
        question: 'Can you connect the plumbing?',
        answer: 'Yes, we handle all plumbing connections including water supply lines, drain connections, and P-trap installation. All plumbing work is done to code and tested for leaks. We ensure proper connections for reliable, leak-free operation.',
      },
      {
        question: 'What size mirrors can you install?',
        answer: 'We can install mirrors of any size, from small medicine cabinet mirrors to large wall mirrors. Installation method depends on size and weight - larger mirrors require more secure mounting. We\'ll assess your mirror and use appropriate mounting hardware.',
      },
      {
        question: 'Do you install medicine cabinets?',
        answer: 'Yes, we install recessed and surface-mounted medicine cabinets. Recessed installation requires cutting into the wall, while surface-mounted cabinets mount directly to the wall. We\'ll discuss options and install the type that works best for your space.',
      },
    ],
    'Bathtub Repair and Replacement': [
      {
        question: 'When should I repair vs. replace my bathtub?',
        answer: 'Minor chips and surface damage can often be repaired with refinishing. Extensive damage, persistent leaks, or outdated style may warrant replacement. We\'ll assess your tub and recommend the most cost-effective solution based on condition and your goals.',
      },
      {
        question: 'What is bathtub refinishing?',
        answer: 'Refinishing involves repairing damage, sanding the surface, and applying a new finish coating. This can restore an old tub\'s appearance at a fraction of replacement cost. The finish is durable and can last 5-10 years with proper care.',
      },
      {
        question: 'How long does bathtub replacement take?',
        answer: 'Bathtub replacement typically takes 1-2 days. This includes removing the old tub, preparing the area, installing the new tub, connecting plumbing, and finishing work. The timeline may extend if tile work or other modifications are needed.',
      },
      {
        question: 'Do you handle the plumbing connections?',
        answer: 'Yes, we handle all plumbing aspects including water supply connections, drain installation, and overflow connections. All plumbing work is tested for leaks and done to code. We ensure proper connections for reliable operation.',
      },
    ],
    'Shower Tile Installation and Repair': [
      {
        question: 'What types of tile can you install in showers?',
        answer: 'We install ceramic, porcelain, natural stone, and glass tiles in showers. Each type has different installation requirements. We\'ll help you choose tile appropriate for wet environments and install it with proper waterproofing to prevent water damage.',
      },
      {
        question: 'How do you ensure the shower is waterproof?',
        answer: 'Proper waterproofing includes a moisture barrier behind tile, proper grouting, and sealing. We use appropriate waterproofing methods based on your shower construction. This prevents water from damaging walls and structure behind the tile.',
      },
      {
        question: 'Can you repair individual tiles?',
        answer: 'Yes, we can replace individual damaged tiles without redoing the entire shower. This requires careful removal of the damaged tile, preparing the area, and installing a matching replacement tile. We work to match existing tile as closely as possible.',
      },
      {
        question: 'How do you prevent mold in showers?',
        answer: 'Proper installation with waterproofing, quality grout, and regular sealing helps prevent mold. We use mold-resistant grout and ensure proper ventilation considerations. We also provide maintenance guidance to help prevent mold growth.',
      },
    ],
    'Kitchen Remodeling and Repair': [
      {
        question: 'How long does a kitchen remodel take?',
        answer: 'Kitchen remodels typically take 4-8 weeks depending on scope. Simple updates may take 2-3 weeks, while complete remodels with layout changes may take 8-12 weeks. We\'ll provide a detailed timeline based on your specific project.',
      },
      {
        question: 'Can I use my kitchen during the remodel?',
        answer: 'This depends on the remodel scope. Minor updates may allow limited kitchen use, while major remodels may require setting up a temporary kitchen. We\'ll discuss this during planning and work to minimize disruption to your daily routine.',
      },
      {
        question: 'Do you handle appliance installation?',
        answer: 'Yes, we install kitchen appliances including dishwashers, ranges, ovens, and refrigerators. This includes proper electrical and plumbing connections where needed. We ensure appliances are level, properly connected, and functioning correctly.',
      },
      {
        question: 'What\'s the typical cost range for a kitchen remodel?',
        answer: 'Kitchen remodel costs vary widely based on scope, materials, and size. Simple updates may cost $5,000-$15,000, while complete remodels can range from $20,000-$50,000+. We provide free estimates so you know exactly what to expect for your specific project.',
      },
    ],
    'Kitchen Backsplash Installation': [
      {
        question: 'What materials can you use for backsplashes?',
        answer: 'We install tile (ceramic, porcelain, glass, natural stone), metal, wood, and other backsplash materials. Each material has different installation requirements. We\'ll help you choose materials that complement your kitchen and are appropriate for the location.',
      },
      {
        question: 'How high should a backsplash be?',
        answer: 'Standard backsplash height is 4-6 inches above the counter, but full-height backsplashes (to cabinets) are increasingly popular. The height depends on your preference and design. We\'ll discuss options and install to your specifications.',
      },
      {
        question: 'Can you create custom patterns?',
        answer: 'Yes, we can create custom tile patterns including herringbone, subway variations, mosaics, and other designs. We\'ll work with you to design a backsplash that matches your style and install it with precision for a professional look.',
      },
      {
        question: 'How long does backsplash installation take?',
        answer: 'Backsplash installation typically takes 1-2 days depending on size and complexity. Simple tile installation may take a day, while complex patterns or large areas may take 2-3 days including grouting and sealing.',
      },
    ],
    'Cabinet Installation and Repair': [
      {
        question: 'Do you install new cabinets or just repair existing ones?',
        answer: 'We do both! We install new kitchen and bathroom cabinets, repair damaged cabinets (doors, drawers, hinges), and can reface existing cabinets. We\'ll assess your needs and recommend the best solution based on your cabinet condition and goals.',
      },
      {
        question: 'How do you ensure cabinets are level?',
        answer: 'We use levels and shims to ensure cabinets are perfectly level and plumb. This is critical for proper door and drawer operation. We check level at multiple points and adjust as needed during installation for professional results.',
      },
      {
        question: 'Can you adjust cabinet doors and drawers?',
        answer: 'Yes, we adjust cabinet doors and drawers for proper alignment and smooth operation. This includes adjusting hinges, fixing sticking drawers, replacing hardware, and ensuring everything opens and closes properly. Often, simple adjustments solve common cabinet problems.',
      },
      {
        question: 'What if my cabinets are damaged?',
        answer: 'We can repair many types of cabinet damage including broken doors, damaged drawers, loose hinges, and surface damage. For extensive damage, we may recommend replacement. We\'ll assess the damage and recommend the most cost-effective solution.',
      },
    ],
    'Countertop Installation and Repair': [
      {
        question: 'What countertop materials do you work with?',
        answer: 'We install and repair granite, quartz, laminate, solid surface, and other countertop materials. Each material has different installation requirements. We\'ll help you choose materials that fit your budget and style, and install them properly.',
      },
      {
        question: 'Can you repair chips and cracks?',
        answer: 'Yes, we can repair chips and small cracks in many countertop materials. Repair methods vary by material - some can be filled and polished, while others may require more extensive work. We\'ll assess the damage and determine the best repair approach.',
      },
      {
        question: 'How do you cut openings for sinks?',
        answer: 'We measure and cut precise openings for sinks using appropriate tools for each countertop material. This includes cutting for undermount and drop-in sinks, ensuring proper fit and support. All cuts are made carefully to prevent damage to the countertop.',
      },
      {
        question: 'How long does countertop installation take?',
        answer: 'Installation time varies by material and project size. Laminate installation may take a few hours, while natural stone installation may take a full day including templating, fabrication, and installation. We\'ll provide a timeline based on your specific project.',
      },
    ],
    'Basement Remodeling and Repair': [
      {
        question: 'What should I consider before remodeling a basement?',
        answer: 'Key considerations include moisture control, egress requirements for bedrooms, ceiling height, electrical and plumbing needs, and local building codes. We\'ll assess your basement and address these factors to create a safe, comfortable, code-compliant space.',
      },
      {
        question: 'How do you handle moisture in basements?',
        answer: 'We address moisture through proper waterproofing, vapor barriers, and drainage solutions. This may include sealing walls, installing sump pumps, or improving drainage. We\'ll assess your basement\'s moisture issues and implement appropriate solutions before finishing.',
      },
      {
        question: 'Can you add bedrooms to a basement?',
        answer: 'Yes, we can add bedrooms to basements, but they must meet egress requirements (window or door for emergency exit). We\'ll ensure any bedroom addition meets local building codes and safety requirements. This may include window well installation or other modifications.',
      },
      {
        question: 'What finishes can you use in basements?',
        answer: 'We can finish basements with drywall, flooring (tile, vinyl, carpet), lighting, and other standard finishes. We choose materials appropriate for basement environments, considering moisture resistance and durability. We\'ll discuss options that work best for your space.',
      },
    ],
    'Home Office Remodeling and Repair': [
      {
        question: 'What should a home office include?',
        answer: 'A functional home office should include adequate lighting, sufficient electrical outlets, proper desk/work surface, storage, and good acoustics. We\'ll design a space that meets your specific work needs and creates a productive environment.',
      },
      {
        question: 'Can you install built-in desks and shelving?',
        answer: 'Yes, we can build custom built-in desks and shelving tailored to your space and needs. This maximizes space efficiency and creates a professional, organized workspace. We\'ll design and build solutions that fit your exact requirements.',
      },
      {
        question: 'How do you improve office lighting?',
        answer: 'We improve lighting through natural light optimization, task lighting installation, and ambient lighting. This may include adding windows, installing recessed or track lighting, and ensuring adequate overall illumination. Good lighting reduces eye strain and improves productivity.',
      },
      {
        question: 'Can you soundproof a home office?',
        answer: 'Yes, we can add sound-dampening materials to reduce noise transmission. This includes insulation, acoustic panels, and door seals. While complete soundproofing may not be possible, we can significantly reduce noise for a quieter work environment.',
      },
    ],
    'Window Installation and Replacement': [
      {
        question: 'What types of windows can you install?',
        answer: 'We install all types of windows including single-hung, double-hung, casement, sliding, awning, and picture windows. We\'ll help you choose the best type for your needs based on ventilation, operation, and aesthetic preferences.',
      },
      {
        question: 'How do energy-efficient windows save money?',
        answer: 'Energy-efficient windows reduce heat transfer, keeping your home cooler in summer and warmer in winter. This reduces HVAC usage and can save 10-25% on energy bills. Features like double-pane glass, low-E coatings, and proper sealing improve efficiency.',
      },
      {
        question: 'How long do new windows last?',
        answer: 'Quality windows typically last 15-30 years depending on materials and maintenance. Vinyl windows often last 20-30 years, while wood windows may need more maintenance but can last 30+ years. We install quality windows that provide long-term value.',
      },
      {
        question: 'Do you handle window permits?',
        answer: 'Window replacement typically doesn\'t require permits unless structural changes are involved. However, we\'ll check local requirements and handle any necessary permits. We ensure all work meets local building codes and regulations.',
      },
    ],
    'Window Screen Repair and Replacement': [
      {
        question: 'What types of window screens can you repair?',
        answer: 'We repair and replace screens for all window types including single-hung, double-hung, sliding, and casement windows. We can repair torn mesh, bent frames, and damaged hardware. For extensive damage, replacement may be more cost-effective.',
      },
      {
        question: 'What screen materials do you use?',
        answer: 'We use standard fiberglass mesh, aluminum mesh, and pet-resistant screens. Material choice depends on your needs - standard mesh for most applications, pet-resistant for homes with pets. We\'ll help you choose the best material for your situation.',
      },
      {
        question: 'Can you make custom-sized screens?',
        answer: 'Yes, we can make custom-sized screens for non-standard windows or replacement screens where exact matches aren\'t available. We measure precisely and build screens that fit perfectly, ensuring proper operation and appearance.',
      },
      {
        question: 'How long do window screens last?',
        answer: 'Window screens typically last 5-10 years depending on material and exposure. Fiberglass screens may need replacement more frequently, while aluminum screens can last longer. Regular cleaning and proper storage in winter can extend screen life.',
      },
    ],
    'Exterior Door Installation and Replacement': [
      {
        question: 'What types of exterior doors can you install?',
        answer: 'We install steel, fiberglass, and wood exterior doors in various styles. Each material has different benefits - steel for security, fiberglass for durability and insulation, wood for aesthetics. We\'ll help you choose based on your priorities and budget.',
      },
      {
        question: 'How do you ensure doors are secure?',
        answer: 'We install doors with proper deadbolts, secure mounting, and quality hardware. Proper installation is critical for security - we ensure doors fit correctly in frames, have secure locks, and operate smoothly. We can also upgrade existing door security.',
      },
      {
        question: 'Can you improve door energy efficiency?',
        answer: 'Yes, energy-efficient doors with proper weatherstripping and insulation can significantly reduce energy loss. We install doors with good insulation values and ensure proper sealing. This improves comfort and reduces heating and cooling costs.',
      },
      {
        question: 'How long does door installation take?',
        answer: 'Exterior door installation typically takes 2-4 hours for a standard door. This includes removal of the old door, preparation, installation, hardware installation, and adjustment. More complex installations may take longer.',
      },
    ],
    'Interior Door Installation and Repair': [
      {
        question: 'What types of interior doors can you install?',
        answer: 'We install solid wood, hollow core, and solid core interior doors in various styles. We can install pre-hung doors (door and frame together) or slab doors (door only). We\'ll help you choose based on your needs, style preferences, and budget.',
      },
      {
        question: 'Can you fix doors that stick or won\'t close?',
        answer: 'Yes, we can fix sticking doors by adjusting hinges, planing edges, or adjusting the frame. Often, simple adjustments solve the problem. We\'ll diagnose the issue and fix it so doors open and close smoothly.',
      },
      {
        question: 'Do you install door hardware?',
        answer: 'Yes, we install door knobs, handles, locks, and other hardware. We can also upgrade existing hardware. Proper hardware installation ensures smooth operation and security. We\'ll install hardware that matches your style and functional needs.',
      },
      {
        question: 'How do you ensure doors are level and plumb?',
        answer: 'We use levels to ensure doors are installed level and plumb. This is critical for proper operation - doors that aren\'t level won\'t close properly. We check and adjust during installation to ensure perfect alignment.',
      },
    ],
    'Patio Door Installation and Repair': [
      {
        question: 'What types of patio doors can you install?',
        answer: 'We install sliding patio doors, French doors, and bifold doors. Each type has different benefits - sliding doors save space, French doors offer wide openings, bifold doors provide flexible opening options. We\'ll help you choose based on your needs.',
      },
      {
        question: 'Can you repair sliding door tracks?',
        answer: 'Yes, we repair and replace damaged tracks, rollers, and hardware on sliding patio doors. Often, cleaning and adjustment solve problems, but damaged components may need replacement. We\'ll diagnose and fix issues to restore smooth operation.',
      },
      {
        question: 'How do you improve patio door energy efficiency?',
        answer: 'We improve efficiency through proper weatherstripping, quality door installation, and energy-efficient glass. Double-pane or triple-pane glass, low-E coatings, and proper sealing all improve energy efficiency. We\'ll discuss options to maximize efficiency.',
      },
      {
        question: 'Do you install screen doors for patio doors?',
        answer: 'Yes, we install screen doors for patio doors to allow ventilation while keeping insects out. Screen doors can be sliding or hinged depending on your patio door type. We\'ll install screens that operate smoothly and fit properly.',
      },
    ],
    'Storm Door Installation and Replacement': [
      {
        question: 'What are the benefits of storm doors?',
        answer: 'Storm doors provide an extra layer of insulation, protect your main door from weather, allow ventilation while keeping the main door closed, and can improve home security. They\'re a cost-effective way to improve energy efficiency and door protection.',
      },
      {
        question: 'What types of storm doors are available?',
        answer: 'We install full-view, mid-view, and high-view storm doors in various materials. Full-view doors have large glass panels, while high-view doors have smaller glass areas. We\'ll help you choose based on your needs and aesthetic preferences.',
      },
      {
        question: 'Can storm doors be used year-round?',
        answer: 'Yes, modern storm doors are designed for year-round use. They have interchangeable glass and screen panels, allowing you to use glass in winter and screens in summer. This provides flexibility and maximum benefit throughout the year.',
      },
      {
        question: 'How do you ensure proper storm door fit?',
        answer: 'We measure your door opening precisely and install storm doors that fit correctly. Proper fit is essential for function and appearance. We ensure doors are level, operate smoothly, and seal properly against your main door frame.',
      },
    ],
    'Floor Tile Installation and Repair': [
      {
        question: 'What types of tile can you install on floors?',
        answer: 'We install ceramic, porcelain, natural stone, and other floor tiles. Each type has different characteristics - porcelain is very durable, natural stone offers unique beauty but requires sealing. We\'ll help you choose based on location, traffic, and style.',
      },
      {
        question: 'How do you prepare floors for tile?',
        answer: 'Proper preparation includes ensuring the subfloor is level, clean, and structurally sound. We may need to level the floor, repair damage, or install underlayment. Proper preparation is critical for long-lasting tile installation.',
      },
      {
        question: 'Can you repair individual tiles?',
        answer: 'Yes, we can replace individual damaged tiles without redoing the entire floor. This requires careful removal, preparing the area, and installing a matching replacement. We work to match existing tile as closely as possible.',
      },
      {
        question: 'How do you prevent cracked tiles?',
        answer: 'We prevent cracking through proper subfloor preparation, using appropriate thinset, ensuring proper spacing for expansion, and using quality materials. Proper installation techniques are critical for preventing cracks and ensuring durability.',
      },
    ],
    'Vinyl Flooring Installation and Repair': [
      {
        question: 'What types of vinyl flooring do you install?',
        answer: 'We install sheet vinyl, luxury vinyl plank (LVP), and luxury vinyl tile (LVT). Each type has different installation methods. LVP and LVT are popular for their durability and realistic appearance. We\'ll help you choose based on your needs and preferences.',
      },
      {
        question: 'Is vinyl flooring waterproof?',
        answer: 'Most modern vinyl flooring, especially LVP and LVT, is waterproof or highly water-resistant. This makes it ideal for bathrooms, kitchens, and basements. We\'ll discuss waterproofing features and recommend appropriate products for wet areas.',
      },
      {
        question: 'Can you repair damaged vinyl flooring?',
        answer: 'Yes, we can repair tears, bubbles, and damaged sections in vinyl flooring. Small repairs may involve patching, while larger areas may need replacement. We\'ll assess damage and recommend the most cost-effective repair approach.',
      },
      {
        question: 'How long does vinyl flooring last?',
        answer: 'Quality vinyl flooring can last 10-20 years with proper care. LVP and LVT often have longer warranties and can last 20+ years. Durability depends on quality, installation, and maintenance. We install quality products that provide long-term value.',
      },
    ],
    'Laminate Floor Installation and Repair': [
      {
        question: 'Is laminate flooring waterproof?',
        answer: 'Traditional laminate is not waterproof, though newer water-resistant options are available. Laminate can handle occasional spills if cleaned quickly, but prolonged water exposure can cause damage. We\'ll discuss water resistance and recommend appropriate products.',
      },
      {
        question: 'Can laminate be installed over existing flooring?',
        answer: 'Laminate can often be installed over existing flooring if it\'s level and in good condition. We\'ll assess your existing floor and determine if it\'s suitable. Sometimes underlayment is needed for proper installation and sound dampening.',
      },
      {
        question: 'How do you repair damaged laminate planks?',
        answer: 'Damaged laminate planks can be replaced, though it requires careful removal and replacement. Since laminate is a floating floor, individual planks can be replaced, though it may require removing adjacent planks. We\'ll assess and repair damage as needed.',
      },
      {
        question: 'What maintenance does laminate require?',
        answer: 'Laminate requires regular sweeping and occasional damp mopping with appropriate cleaners. Avoid excessive water and harsh chemicals. We\'ll provide maintenance guidance to help your laminate floor last and look good for years.',
      },
    ],
    'Wood Floor Installation and Repair': [
      {
        question: 'What types of wood flooring do you install?',
        answer: 'We install solid hardwood, engineered hardwood, and bamboo flooring. Each type has different characteristics - solid wood can be refinished multiple times, engineered wood offers stability, bamboo is eco-friendly. We\'ll help you choose based on your needs.',
      },
      {
        question: 'Can you refinish existing wood floors?',
        answer: 'Yes, we can sand and refinish existing wood floors to restore their appearance. This involves sanding to remove old finish, repairing damage, and applying new stain and finish. Refinishing can make old floors look new again.',
      },
      {
        question: 'How do you repair damaged wood floors?',
        answer: 'We can repair scratches, dents, water damage, and other issues. Minor damage may be spot-repaired, while extensive damage may require board replacement or refinishing. We\'ll assess damage and recommend the best repair approach.',
      },
      {
        question: 'How long do wood floors last?',
        answer: 'Quality wood floors can last 50-100 years with proper care. Solid wood can be refinished multiple times, extending its life. Engineered wood may have fewer refinishing options but still provides decades of service. Proper installation and maintenance are key.',
      },
    ],
    'Interior Painting': [
      {
        question: 'How many coats of paint do you apply?',
        answer: 'We typically apply 2 coats of paint for proper coverage and durability. Some situations may require primer plus 2 coats, especially for color changes or problem surfaces. We\'ll determine the best approach based on your specific situation.',
      },
      {
        question: 'Do you move furniture?',
        answer: 'We move and protect furniture as part of our service. We\'ll move items away from walls, cover everything with drop cloths, and ensure your belongings are protected. After painting, we\'ll move furniture back into place.',
      },
      {
        question: 'How long does interior painting take?',
        answer: 'Painting time varies by room size and complexity. A typical bedroom may take 1-2 days, while larger rooms or multiple rooms take longer. We\'ll provide a timeline based on your specific project scope.',
      },
      {
        question: 'What paint brands do you use?',
        answer: 'We use quality paint brands that provide good coverage and durability. We can use your preferred brand or recommend options based on your needs and budget. Quality paint ensures better results and longer-lasting finish.',
      },
    ],
    'Exterior Painting': [
      {
        question: 'How often should exterior paint be redone?',
        answer: 'Exterior paint typically lasts 5-10 years depending on material, climate, and exposure. Wood siding may need painting more frequently than vinyl or brick. We\'ll assess your home\'s condition and recommend when painting is needed.',
      },
      {
        question: 'What weather conditions are needed for exterior painting?',
        answer: 'Exterior painting requires dry weather with temperatures typically above 50°F. We schedule painting during appropriate weather conditions to ensure proper paint adhesion and drying. We\'ll work with weather to ensure quality results.',
      },
      {
        question: 'Do you power wash before painting?',
        answer: 'Yes, we power wash and prepare surfaces before painting. This removes dirt, mildew, and loose paint, ensuring proper paint adhesion. Proper preparation is critical for long-lasting exterior paint jobs.',
      },
      {
        question: 'How do you protect landscaping during painting?',
        answer: 'We cover plants, shrubs, and landscaping with drop cloths and tarps to protect them from paint and paint splatter. We take care to minimize impact on your landscaping while ensuring thorough painting coverage.',
      },
    ],
    'Deck Painting and Staining': [
      {
        question: 'Should I paint or stain my deck?',
        answer: 'Staining is generally preferred for decks as it penetrates wood and shows grain, while paint sits on surface and can peel. However, both options work. We\'ll discuss pros and cons and help you choose based on your deck condition and preferences.',
      },
      {
        question: 'How do you prepare a deck for painting/staining?',
        answer: 'Preparation includes cleaning (power washing), removing old finish if needed, sanding rough areas, and ensuring the deck is completely dry. Proper preparation is essential for finish adhesion and longevity. We\'ll thoroughly prepare your deck.',
      },
      {
        question: 'How long does deck finish last?',
        answer: 'Deck stain typically lasts 2-4 years, while paint may last 3-5 years depending on exposure and quality. Regular maintenance extends life. We\'ll discuss expected lifespan and maintenance needs for your specific situation.',
      },
      {
        question: 'Can you work around deck furniture?',
        answer: 'Yes, we\'ll work around deck furniture or move it as needed. We\'ll coordinate with you to minimize disruption. Some projects may require moving furniture temporarily, which we\'ll handle carefully.',
      },
    ],
    'Fence Painting and Staining': [
      {
        question: 'Should I paint or stain my fence?',
        answer: 'Staining is generally preferred for wood fences as it penetrates and protects while showing wood grain. Paint provides more color options but sits on surface. We\'ll discuss options and help you choose based on your fence type and goals.',
      },
      {
        question: 'How do you prepare a fence for painting/staining?',
        answer: 'Preparation includes cleaning (power washing if needed), removing loose paint or stain, sanding rough areas, and ensuring the fence is dry. Proper preparation ensures good adhesion and long-lasting results.',
      },
      {
        question: 'How long does fence finish last?',
        answer: 'Fence stain typically lasts 2-4 years depending on exposure and quality. Paint may last 3-5 years. Regular maintenance and reapplication extend fence life. We\'ll discuss expected lifespan for your specific situation.',
      },
      {
        question: 'Do you paint both sides of the fence?',
        answer: 'We can paint or stain both sides if desired, though often only the visible side is finished. We\'ll discuss options and finish according to your preferences. Finishing both sides provides better protection.',
      },
    ],
    'Cabinet Painting and Refinishing': [
      {
        question: 'How long does cabinet painting take?',
        answer: 'Cabinet painting typically takes 3-5 days including preparation, multiple coats, and drying time. We remove doors and hardware, prepare surfaces, apply primer and paint, and reinstall everything. We\'ll provide a timeline for your specific project.',
      },
      {
        question: 'Do you remove cabinet doors?',
        answer: 'Yes, we remove doors and hardware for proper painting. This allows us to paint all surfaces evenly and achieve a professional finish. We\'ll label everything for easy reinstallation in the correct locations.',
      },
      {
        question: 'What type of paint do you use on cabinets?',
        answer: 'We use durable, washable paint designed for cabinets and high-traffic areas. This includes proper primer and finish coats. Quality cabinet paint resists chipping, staining, and wear common in kitchen and bathroom environments.',
      },
      {
        question: 'Can you change cabinet hardware?',
        answer: 'Yes, we can install new hardware as part of the refinishing process. This includes knobs, handles, and hinges. New hardware can dramatically update cabinet appearance. We\'ll help you choose and install hardware that complements your new finish.',
      },
    ],
    'Deck and Patio Construction': [
      {
        question: 'What materials can you use for deck construction?',
        answer: 'We build decks with pressure-treated wood, cedar, composite decking, and other materials. Each has different characteristics - pressure-treated is economical, cedar is naturally rot-resistant, composite is low-maintenance. We\'ll help you choose based on budget and preferences.',
      },
      {
        question: 'Do you need permits for deck construction?',
        answer: 'Most deck construction requires permits, especially for elevated decks. We handle all necessary permits and ensure construction meets local building codes. This includes structural requirements, railings, and safety standards.',
      },
      {
        question: 'How long does deck construction take?',
        answer: 'Deck construction typically takes 1-2 weeks depending on size and complexity. This includes permits, material delivery, framing, decking installation, and finishing work. We\'ll provide a timeline based on your specific project.',
      },
      {
        question: 'What maintenance do decks require?',
        answer: 'Wood decks require regular cleaning and periodic staining or sealing (every 2-4 years). Composite decks require less maintenance - mainly cleaning. We\'ll discuss maintenance requirements for your chosen material and provide care guidance.',
      },
    ],
    'Deck and Patio Repair and Service': [
      {
        question: 'What types of deck repairs do you do?',
        answer: 'We repair rotted boards, loose railings, wobbly stairs, damaged joists, and other structural issues. We assess deck safety and address problems to restore structural integrity. We\'ll identify all issues and recommend necessary repairs.',
      },
      {
        question: 'How do you know if a deck is safe?',
        answer: 'We inspect decks for structural integrity, checking joists, posts, railings, and connections. Signs of problems include sagging, loose boards, wobbly railings, or rot. We\'ll assess safety and recommend repairs or replacement as needed.',
      },
      {
        question: 'Can you match existing deck materials?',
        answer: 'We work to match existing deck materials as closely as possible. For older decks, exact matches may not be available, but we\'ll find the closest match. We aim to make repairs blend with existing deck appearance.',
      },
      {
        question: 'How long do deck repairs take?',
        answer: 'Repair time varies by extent of damage. Simple board replacement may take a few hours, while extensive structural repairs may take several days. We\'ll assess damage and provide a timeline for your specific repairs.',
      },
    ],
    'Fence Installation and Repair': [
      {
        question: 'What types of fences can you install?',
        answer: 'We install wood (cedar, pine, pressure-treated), vinyl, chain-link, and metal fences. Each type has different characteristics and costs. We\'ll help you choose based on your needs for privacy, security, maintenance, and budget.',
      },
      {
        question: 'Do you need permits for fence installation?',
        answer: 'Fence installation often requires permits, especially for certain heights or types. We handle permit applications and ensure installation meets local codes including height restrictions, setback requirements, and material specifications.',
      },
      {
        question: 'How do you set fence posts?',
        answer: 'We set posts in concrete for stability and longevity. Post depth depends on fence height and local codes (typically 1/3 of post height). Proper post setting is critical for fence stability and longevity. We ensure posts are level and properly secured.',
      },
      {
        question: 'Can you repair existing fences?',
        answer: 'Yes, we repair damaged sections, replace rotted posts, fix gates, and restore fence integrity. We\'ll assess damage and repair or replace components as needed. Often, targeted repairs can extend fence life without full replacement.',
      },
    ],
    'Custom Shelving': [
      {
        question: 'What types of custom shelving can you build?',
        answer: 'We build wall-mounted shelves, built-in shelving units, floating shelves, and freestanding units. We can design and build shelving for any space including closets, garages, living rooms, and offices. Each project is customized to your needs.',
      },
      {
        question: 'What materials can you use?',
        answer: 'We use wood, plywood, MDF, and other materials for shelving. Material choice depends on your budget, style preferences, and weight requirements. We\'ll help you choose materials that work for your specific application and aesthetic.',
      },
      {
        question: 'How much weight can custom shelves hold?',
        answer: 'Weight capacity depends on shelf design, materials, and mounting method. We design shelves based on intended use - light display items vs. heavy storage. We\'ll discuss your needs and design shelves with appropriate support and capacity.',
      },
      {
        question: 'Can you match existing woodwork?',
        answer: 'Yes, we can match existing wood species, stain colors, and styles. We\'ll take samples and work to create shelving that blends seamlessly with your existing interior. Matching requires attention to detail, which we provide.',
      },
    ],
    'Custom Bookcases': [
      {
        question: 'What styles of bookcases can you build?',
        answer: 'We build floor-to-ceiling bookcases, wall-mounted units, freestanding cases, and built-in libraries. Styles range from traditional to modern. We\'ll design bookcases that fit your space, accommodate your collection, and match your decor.',
      },
      {
        question: 'Can you design bookcases for specific spaces?',
        answer: 'Yes, we specialize in custom bookcases designed for specific spaces. We\'ll measure your area, consider your collection size, and design bookcases that maximize storage while fitting perfectly. Custom design ensures optimal use of space.',
      },
      {
        question: 'What features can bookcases include?',
        answer: 'Bookcases can include adjustable shelves, lighting, glass doors, drawers, and display areas. We\'ll discuss your needs and incorporate features that enhance functionality and appearance. Custom features make bookcases more useful and attractive.',
      },
      {
        question: 'How long does bookcase construction take?',
        answer: 'Custom bookcase construction typically takes 1-2 weeks depending on size and complexity. This includes design, material selection, construction, and installation. We\'ll provide a timeline based on your specific project scope.',
      },
    ],
    'Crown Molding Installation and Repair': [
      {
        question: 'What types of crown molding can you install?',
        answer: 'We install various crown molding profiles and sizes to match your home\'s style. We can match existing molding or help you choose new styles. Molding adds architectural character and can make rooms feel more finished and elegant.',
      },
      {
        question: 'How do you handle corners?',
        answer: 'We cut precise mitered corners for inside and outside corners. Proper corner work is critical for professional appearance. We use precise measuring and cutting techniques to ensure corners fit perfectly with minimal gaps.',
      },
      {
        question: 'Can you match existing crown molding?',
        answer: 'Yes, we can match existing crown molding profiles and sizes. If exact matches aren\'t available, we\'ll find the closest match. We can also replicate custom profiles if needed. Matching ensures seamless integration with existing work.',
      },
      {
        question: 'How long does crown molding installation take?',
        answer: 'Crown molding installation time depends on room size and complexity. A typical room may take 4-8 hours including measuring, cutting, installation, caulking, and finishing. Multiple rooms or complex layouts take longer.',
      },
    ],
    'Faucet Repair and Replacement': [
      {
        question: 'What causes faucet leaks?',
        answer: 'Faucet leaks are often caused by worn O-rings, damaged cartridges, corroded parts, or loose connections. We diagnose the specific cause and fix it. Often, simple parts replacement solves leaks without full faucet replacement.',
      },
      {
        question: 'Can you fix low water pressure?',
        answer: 'Yes, low water pressure can be caused by clogged aerators, mineral buildup, or faulty cartridges. We clean or replace aerators, remove buildup, and repair or replace faulty components. Often, cleaning solves pressure problems.',
      },
      {
        question: 'How long does faucet replacement take?',
        answer: 'Faucet replacement typically takes 1-2 hours including removal of old faucet, installation of new unit, and testing. More complex installations or plumbing updates may take longer. We\'ll provide a time estimate for your specific situation.',
      },
      {
        question: 'Do you install all faucet types?',
        answer: 'Yes, we install kitchen faucets, bathroom faucets, utility faucets, and specialty faucets. We work with all brands and types including single-handle, double-handle, pull-out, and touchless models. We\'ll install the type that works for your needs.',
      },
    ],
    'Sink Repair and Replacement': [
      {
        question: 'What types of sinks can you install?',
        answer: 'We install drop-in, undermount, vessel, and farmhouse sinks in various materials. Each type has different installation requirements. We\'ll help you choose based on your countertop, style preferences, and functional needs.',
      },
      {
        question: 'Can you install garbage disposals?',
        answer: 'Yes, we install and connect garbage disposals as part of sink installation or separately. This includes proper electrical connections (if needed) and plumbing connections. We ensure disposals are properly installed and functioning.',
      },
      {
        question: 'How do you fix sink leaks?',
        answer: 'Sink leaks can occur at connections, drains, or the sink itself. We diagnose the leak source and fix it - this may involve replacing seals, tightening connections, or repairing/replacing damaged components. Proper diagnosis is key to permanent fixes.',
      },
      {
        question: 'How long does sink replacement take?',
        answer: 'Sink replacement typically takes 2-4 hours depending on sink type and complexity. Undermount sinks may take longer due to countertop work needed. We\'ll provide a time estimate based on your specific sink and installation requirements.',
      },
    ],
    'Toilet Repair and Replacement': [
      {
        question: 'What causes running toilets?',
        answer: 'Running toilets are usually caused by worn flappers, faulty fill valves, or improper chain length. We diagnose and fix these issues. Often, simple parts replacement solves running toilets without full replacement.',
      },
      {
        question: 'How do you know if a toilet needs replacement?',
        answer: 'Toilets may need replacement due to persistent problems, cracks, outdated style, or water efficiency goals. We\'ll assess your toilet and recommend repair or replacement based on condition and your goals. New toilets are more water-efficient.',
      },
      {
        question: 'Can you install water-efficient toilets?',
        answer: 'Yes, we install modern low-flow and dual-flush toilets that use less water. These can significantly reduce water usage and utility costs. We\'ll help you choose efficient models that meet your needs and local requirements.',
      },
      {
        question: 'How long does toilet replacement take?',
        answer: 'Toilet replacement typically takes 1-2 hours including removal, installation, and testing. This includes proper wax ring installation, water connections, and ensuring everything works correctly. We\'ll have your bathroom functional quickly.',
      },
    ],
    'Drain Repair and Replacement': [
      {
        question: 'What methods do you use to clear clogs?',
        answer: 'We use snaking, hydro-jetting, and other methods depending on the clog type and location. Simple clogs may be cleared with snaking, while stubborn clogs may require hydro-jetting. We\'ll choose the most effective method for your situation.',
      },
      {
        question: 'Can you prevent future clogs?',
        answer: 'We can install drain screens, provide maintenance guidance, and recommend preventive measures. Regular maintenance helps prevent clogs. We\'ll discuss habits and products that help keep drains clear.',
      },
      {
        question: 'How do you find drain problems?',
        answer: 'We use camera inspection to locate clogs, damage, and other drain problems. This allows us to see inside pipes and identify issues without guesswork. Camera inspection helps us provide accurate diagnosis and effective solutions.',
      },
      {
        question: 'When do drains need replacement vs. repair?',
        answer: 'Minor clogs and small damage can often be repaired. Extensive corrosion, major breaks, or recurring problems may require pipe replacement. We\'ll assess damage and recommend the most cost-effective solution - repair when possible, replace when necessary.',
      },
    ],
    'Plumbing Leak Detection': [
      {
        question: 'How do you find hidden leaks?',
        answer: 'We use advanced methods including pressure testing, thermal imaging, moisture detection, and acoustic listening devices. These tools help us locate leaks without unnecessary demolition, saving time and repair costs.',
      },
      {
        question: 'What are signs of hidden leaks?',
        answer: 'Signs include unexplained high water bills, water stains, mold growth, musty odors, or sounds of running water. If you notice these, we can investigate and locate the leak source using our detection equipment.',
      },
      {
        question: 'How much can leaks cost?',
        answer: 'Hidden leaks can waste hundreds of gallons daily and significantly increase water bills. They can also cause water damage and mold. Early detection and repair saves money and prevents damage. Our detection service helps find problems before they worsen.',
      },
      {
        question: 'Do you repair leaks after finding them?',
        answer: 'Yes, once we locate leaks, we can repair them. This may involve pipe repair, joint sealing, or component replacement. We\'ll discuss repair options and costs after detection, then proceed with your approval.',
      },
    ],
    'Light Fixture Installation and Repair': [
      {
        question: 'What types of light fixtures can you install?',
        answer: 'We install chandeliers, pendant lights, ceiling fixtures, wall sconces, outdoor lighting, and more. We work with all fixture types and can help you choose fixtures that fit your style and provide appropriate lighting for each space.',
      },
      {
        question: 'Do you handle electrical wiring?',
        answer: 'Yes, we handle all electrical aspects including wiring connections, switch installation, and ensuring proper electrical codes. All electrical work is done safely and professionally with proper grounding and connections.',
      },
      {
        question: 'Can you install dimmer switches?',
        answer: 'Yes, we install dimmer switches for compatible fixtures. Dimmers provide lighting control and can extend bulb life. We\'ll ensure dimmers are compatible with your fixtures and install them properly for smooth operation.',
      },
      {
        question: 'How long does fixture installation take?',
        answer: 'Fixture installation time varies by complexity. Simple replacements may take 30-60 minutes, while new installations with wiring may take 1-2 hours. We\'ll provide a time estimate based on your specific fixture and installation requirements.',
      },
    ],
    'Recessed Lighting Installation and Service': [
      {
        question: 'How many recessed lights do I need?',
        answer: 'The number depends on room size, ceiling height, and desired illumination. Generally, lights are spaced 4-6 feet apart. We\'ll assess your space and design a layout that provides even, adequate lighting for your needs.',
      },
      {
        question: 'Can you install recessed lights in existing ceilings?',
        answer: 'Yes, we can install recessed lights in existing ceilings. This requires cutting holes, running wiring, and installing housings. We ensure proper spacing and installation for professional results. We\'ll work carefully to minimize disruption.',
      },
      {
        question: 'What size recessed lights should I use?',
        answer: 'Recessed light size (4-inch, 5-inch, 6-inch) depends on room size and desired effect. Larger lights provide more illumination, smaller lights offer more focused light. We\'ll help you choose appropriate sizes for your space and lighting goals.',
      },
      {
        question: 'Can you install dimmers for recessed lighting?',
        answer: 'Yes, we install dimmer switches for recessed lighting. Dimmers provide lighting control and can create different moods. We\'ll ensure dimmers are compatible with your lights and install them for smooth, flicker-free operation.',
      },
    ],
    'Light Switch Installation and Repair': [
      {
        question: 'What types of switches can you install?',
        answer: 'We install standard switches, dimmers, timers, motion sensors, and smart switches. Each type serves different purposes. We\'ll help you choose switches that meet your needs for convenience, energy savings, and functionality.',
      },
      {
        question: 'Can you install three-way switches?',
        answer: 'Yes, we install three-way and four-way switches for controlling lights from multiple locations. This is common for stairways, hallways, and large rooms. Proper wiring is critical for multi-way switches to function correctly.',
      },
      {
        question: 'How do you fix switches that don\'t work?',
        answer: 'We diagnose switch problems by testing wiring, checking connections, and identifying faulty components. Problems may be loose connections, faulty switches, or wiring issues. We\'ll identify and fix the problem to restore function.',
      },
      {
        question: 'Are smart switches worth it?',
        answer: 'Smart switches offer convenience, energy savings, and home automation benefits. They allow remote control, scheduling, and integration with smart home systems. We\'ll discuss benefits and help you decide if smart switches fit your needs and budget.',
      },
    ],
    'Outlet Installation and Replacement': [
      {
        question: 'Why would I need new outlets?',
        answer: 'New outlets may be needed for additional devices, updated locations, or replacing old two-prong outlets with three-prong grounded outlets. We can add outlets where needed and upgrade existing outlets for safety and convenience.',
      },
      {
        question: 'What are GFCI outlets and where are they needed?',
        answer: 'GFCI (Ground Fault Circuit Interrupter) outlets protect against electrical shock and are required in bathrooms, kitchens, garages, and outdoor areas. They shut off power if they detect ground faults. We install GFCIs where required by code.',
      },
      {
        question: 'Can you install USB outlets?',
        answer: 'Yes, we install USB outlets that provide both standard outlets and USB charging ports. These are convenient for charging devices without adapters. We can install USB outlets in bedrooms, offices, and other locations where device charging is common.',
      },
      {
        question: 'How long does outlet installation take?',
        answer: 'Outlet installation typically takes 30-60 minutes per outlet depending on wiring complexity. Adding new outlets may take longer if new wiring is needed. We\'ll provide a time estimate based on your specific installation requirements.',
      },
    ],
    'Smoke Detector Installation and Replacement': [
      {
        question: 'How many smoke detectors do I need?',
        answer: 'Building codes typically require smoke detectors in each bedroom, outside sleeping areas, and on each floor. We\'ll assess your home and ensure you meet code requirements. More detectors provide better protection.',
      },
      {
        question: 'Should smoke detectors be hardwired or battery?',
        answer: 'Hardwired detectors with battery backup are preferred as they\'re interconnected (all sound when one detects smoke) and don\'t rely solely on batteries. We install hardwired systems where possible, with battery backup for reliability.',
      },
      {
        question: 'How often should smoke detectors be replaced?',
        answer: 'Smoke detectors should be replaced every 10 years or when they fail testing. We test existing detectors and replace those that are expired or not functioning. Regular testing and replacement ensure reliable protection.',
      },
      {
        question: 'Do you test existing smoke detectors?',
        answer: 'Yes, we test all smoke detectors during installation and can test existing detectors. Testing ensures they function properly. We\'ll identify and replace any detectors that don\'t work correctly.',
      },
    ],
    'Carbon Monoxide Detector Installation and Replacement': [
      {
        question: 'Where should CO detectors be installed?',
        answer: 'CO detectors should be installed near bedrooms and on each floor, especially near fuel-burning appliances. We\'ll assess your home and install detectors in appropriate locations to provide comprehensive protection.',
      },
      {
        question: 'How do CO detectors work?',
        answer: 'CO detectors monitor air for carbon monoxide and sound alarms when dangerous levels are detected. They provide early warning of this odorless, colorless gas. Proper installation and maintenance ensure reliable detection.',
      },
      {
        question: 'How often should CO detectors be replaced?',
        answer: 'CO detectors typically last 5-7 years and should be replaced when expired or not functioning. We test existing detectors and replace those that are expired or faulty. Regular replacement ensures reliable protection.',
      },
      {
        question: 'Do CO detectors need batteries?',
        answer: 'Battery-operated CO detectors need battery replacement every 6-12 months. Hardwired detectors have battery backup. We install hardwired units where possible and ensure all detectors have working batteries for reliable operation.',
      },
    ],
    'Furniture Assembly': [
      {
        question: 'What types of furniture can you assemble?',
        answer: 'We assemble all types of ready-to-assemble (RTA) furniture including bedroom sets, dining room furniture, office furniture, entertainment centers, and more. We have experience with all major brands and furniture types.',
      },
      {
        question: 'How long does furniture assembly take?',
        answer: 'Assembly time varies by furniture complexity. Simple items may take 30-60 minutes, while complex pieces like large entertainment centers may take 2-4 hours. We\'ll provide a time estimate based on your specific furniture.',
      },
      {
        question: 'Do you provide your own tools?',
        answer: 'Yes, we bring all necessary tools for furniture assembly. You don\'t need to provide anything. We have the right tools to ensure proper assembly and avoid damage that can occur with incorrect tools.',
      },
      {
        question: 'What if parts are missing or damaged?',
        answer: 'If parts are missing or damaged, we\'ll identify the issue and help you contact the manufacturer for replacements. We document any problems and can return to complete assembly once replacement parts arrive.',
      },
    ],
    'Cabinet Assembly': [
      {
        question: 'What types of cabinets can you assemble?',
        answer: 'We assemble kitchen cabinets, bathroom cabinets, storage cabinets, and built-in units. This includes flat-pack cabinets from various manufacturers. We ensure proper assembly and can install cabinets once assembled.',
      },
      {
        question: 'Do you install cabinets after assembly?',
        answer: 'Yes, we can install cabinets after assembly. This includes mounting wall and base cabinets, ensuring proper leveling, installing doors and drawers, and mounting hardware. Complete service from assembly to installation.',
      },
      {
        question: 'How do you ensure cabinets are level?',
        answer: 'We use levels and shims to ensure cabinets are perfectly level and plumb during installation. This is critical for proper door and drawer operation. We check and adjust throughout installation for professional results.',
      },
      {
        question: 'Can you adjust cabinet doors and drawers?',
        answer: 'Yes, we adjust doors and drawers as part of assembly and installation. This ensures smooth operation and proper alignment. We test all components and make adjustments needed for optimal function.',
      },
    ],
    'Grill Assembly': [
      {
        question: 'What types of grills can you assemble?',
        answer: 'We assemble gas grills, charcoal grills, and electric grills from all major brands. Each type has different assembly requirements. We have experience with all grill types and ensure proper, safe assembly.',
      },
      {
        question: 'Do you connect gas lines?',
        answer: 'Yes, we can connect gas grills to natural gas or propane lines. This includes proper connections, leak testing, and safety checks. We ensure all gas connections are safe and properly installed according to manufacturer specifications.',
      },
      {
        question: 'How long does grill assembly take?',
        answer: 'Grill assembly typically takes 1-2 hours depending on grill size and complexity. Larger, more complex grills may take longer. We\'ll provide a time estimate based on your specific grill model.',
      },
      {
        question: 'Do you test the grill after assembly?',
        answer: 'Yes, we test all grill functions after assembly including ignition, burner operation, and temperature controls. We ensure everything works properly and provide guidance on proper use and maintenance.',
      },
    ],
  }

  // Return service-specific FAQs or default generic ones
  return faqs[serviceName] || [
    {
      question: `How much does ${serviceName.toLowerCase()} cost?`,
      answer: `Pricing for ${serviceName.toLowerCase()} varies based on the scope of work, materials needed, and project complexity. We provide free, no-obligation estimates so you know exactly what to expect. Contact us for a detailed quote tailored to your specific needs.`,
    },
    {
      question: `How long does ${serviceName.toLowerCase()} take?`,
      answer: `The timeline for ${serviceName.toLowerCase()} depends on the project size and complexity. Simple repairs may take a few hours, while larger installations could take several days. We'll provide a detailed timeline during your free consultation.`,
    },
    {
      question: `Do you offer warranties on ${serviceName.toLowerCase()}?`,
      answer: `Yes! We stand behind our work and offer warranties on all ${serviceName.toLowerCase()} services. The specific warranty terms depend on the type of work performed, and we'll discuss this with you before starting any project.`,
    },
    {
      question: `Are you licensed and insured for ${serviceName.toLowerCase()}?`,
      answer: `Absolutely. Threadstead Services is fully licensed and insured. We carry comprehensive liability insurance to protect you and your property. You can have complete peace of mind when we're working in your home.`,
    },
  ]
}

