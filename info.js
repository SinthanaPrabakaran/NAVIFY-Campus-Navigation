const placeList = [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.840999, 80.154037] },
      "properties": {
        "name": "Central Library",
        "info": "Main campus library with extensive academic resources.",
        //"url": "/images/central_library.jpg",
        "address": "Opposite Admin Block"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.843687, 80.153544] },
      "properties": {
        "name": "AB1",
        "info": "Academic Block 1 with lecture halls and labs.",
        //"url": "/images/ab1.jpg",
        "address": "Academic Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842696, 80.156533] },
      "properties": {
        "name": "AB2",
        "info": "Academic Block 2 for core departments.",
        //"url": "/images/ab2.jpg",
        "address": "Academic Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.843786, 80.154786] },
      "properties": {
        "name": "AB3",
        "info": "Academic Block 3",
        //"url": "/images/ab3.jpg",
        "address": "Academic Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842981, 80.155957] },
      "properties": {
        "name": "AB4",
        "info": "Academic Block 4 for advanced studies.",
        //"url": "/images/ab4.jpg",
        "address": "Academic Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841020, 80.156060] },
      "properties": {
        "name": "Delta Block",
        "info": "Delta Block for research and innovation.",
        //"url": "/images/delta_block.jpg",
        "address": "Academic Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.844597, 80.153540] },
      "properties": {
        "name": "Sigma Block",
        "info": "Sigma Block with modern classrooms.",
        //"url": "/images/sigma_block.jpg",
        "address": "Academic Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.840541, 80.153963] },
      "properties": {
        "name": "Admin Block",
        "info": "Administration Block for campus offices.",
        //"url": "/images/admin_block.jpg",
        "address": "Campus Center"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.839552, 80.155040] },
      "properties": {
        "name": "MG Auditorium",
        "info": "Main auditorium for events and seminars.",
        //"url": "/images/mg_auditorium.jpg",
        "address": "Near Academic Blocks"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841114, 80.153043] },
      "properties": {
        "name": "Parking Area 1",
        "info": "Parking area for students and staff.",
        //"url": "/images/parking1.jpg",
        "address": "Near AB1"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.840795, 80.155417] },
      "properties": {
        "name": "Parking Area 2",
        "info": "Secondary parking zone.",
        //"url": "/images/parking2.jpg",
        "address": "Near Central Library"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.840288, 80.155235] },
      "properties": {
        "name": "Parking Area 3",
        "info": "Overflow parking area.",
        //"url": "/images/parking3.jpg",
        "address": "Campus Periphery"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.844364, 80.152673] },
      "properties": {
        "name": "Hostel Block A (Boys)",
        "info": "Boys' hostel with modern amenities.",
       // "url": "/images/hostel_a_boys.jpg",
        "address": "Hostel Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842040, 80.157062] },
      "properties": {
        "name": "Hostel Block B (Girls)",
        "info": "Girls' hostel with secure accommodation.",
        //"url": "/images/hostel_b_girls.jpg",
        "address": "Hostel Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842882, 80.157638] },
      "properties": {
        "name": "Hostel Block C (Boys)",
        "info": "Boys' hostel with recreational facilities.",
        //"url": "/images/hostel_c_boys.jpg",
        "address": "Hostel Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.843752, 80.152099] },
      "properties": {
        "name": "Hostel Block D1 (Boys)",
        "info": "Boys' hostel D1 block.",
        //"url": "/images/hostel_d1_boys.jpg",
        "address": "Hostel Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.843745, 80.151644] },
      "properties": {
        "name": "Hostel Block D2 (Boys)",
        "info": "Boys' hostel D2 block.",
       // "url": "/images/hostel_d2_boys.jpg",
        "address": "Hostel Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841397, 80.156675] },
      "properties": {
        "name": "Health Centre",
        "info": "Health services available for students and staff.",
        //"url": "/images/health_centre.jpg",
        "address": "Near Academic Blocks"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841525, 80.154689] },
      "properties": {
        "name": "Gazebo",
        "info": "Popular campus hangout spot.",
        //"url": "/images/gazebo.jpg",
        "address": "Cafeteria Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841485, 80.155131] },
      "properties": {
        "name": "Lassi House",
        "info": "Famous for chilled lassi and snacks.",
        //"url": "/images/lassi_house.jpg",
        "address": "Cafeteria Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.844173, 80.154201] },
      "properties": {
        "name": "North Square",
        "info": "Food court with multiple cuisines.",
       // "url": "/images/north_square.jpg",
        "address": "Cafeteria Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.843551, 80.152607] },
      "properties": {
        "name": "Gymkhaaana",
        "info": "Campus gym and fitness center.",
       // "url": "/images/gymkhaaana.jpg",
        "address": "Cafeteria Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.843808, 80.152635] },
      "properties": {
        "name": "Dominos",
        "info": "Dominos Pizza outlet for quick bites.",
       // "url": "/images/dominos.jpg",
        "address": "Cafeteria Zone"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842461, 80.153329] },
      "properties": {
        "name": "Basketball Court",
        "info": "Outdoor basketball court for sports.",
        //"url": "/images/basketball_court.jpg",
        "address": "Sports Complex"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842147, 80.154942] },
      "properties": {
        "name": "Cricket Ground",
        "info": "Main cricket ground for matches and practice.",
        //"url": "/images/cricket_ground.jpg",
        "address": "Sports Complex"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842450, 80.153881] },
      "properties": {
        "name": "Football Ground",
        "info": "Football ground for tournaments and recreation.",
       // "url": "/images/football_ground.jpg",
        "address": "Sports Complex"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.842915, 80.153115] },
      "properties": {
        "name": "Tennis Court",
        "info": "Tennis court for students and staff.",
        //"url": "/images/tennis_court.jpg",
        "address": "Sports Complex"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841658, 80.154128] },
      "properties": {
        "name": "MGR Statue",
        "info": "Statue of MGR, a campus landmark.",
       // "url": "/images/mgr_statue.jpg",
        "address": "Campus Center"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.841164, 80.154683] },
      "properties": {
        "name": "Clock Court",
        "info": "Popular student gathering area with a clock tower.",
        //"url": "/images/clock_court.jpg",
        "address": "Campus Center"
      }
    }
  ];
  