export const variablesList = {
    "Count": 140,
    "Message": "Results returned successfully",
    "SearchCriteria": null,
    "Results": [
        {
            "DataType": "string",
            "Description": "<p>This field stores any other battery information that does not belong to any of the other battery related fields.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 1,
            "Name": "Other Battery Info"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Battery type field stores the battery chemistry type for anode, cathode.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 2,
            "Name": "Battery Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Bed type is the type of bed (the open back) used for pickup trucks. The common values are standard, short, long, extended.</p>",
            "GroupName": "Exterior / Truck",
            "ID": 3,
            "Name": "Bed Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Cab type applies to both pickup truck and other medium- and heavy-duty trucks. The cab or cabin of a truck is the inside space in a truck where the driver is seated. For pickup trucks, the cab type is categorized by the combination number of doors and number of rows for seating. For medium- and heavy-duty trucks (MDHD), the cab type is categorized by the relative location of engine and cab.</p><p>For pickup trucks, there are four cab types.</p><ul><li>Regular: 2 door, 1 row of seats</li><li>Extra/Super/Quad/Double/King/Extended: 2 doors, 2 rows of seats</li><li>Crew/Super Crew/Crew Max: 4 doors, 2 rows of seats</li><li>Mega: 4 doors, 2 rows of seats (with a bigger cabin than crew cab type)</li></ul><p>For medium- and heavy-duty (MDHD) trucks, there are several categories as listed below.</p><ul><li>Cab Beside Engine</li><li>CAE: Cab Above Engine</li><li>CBE: Cab Behind Engine</li><li>COE: Cab Over Engine or Flat Nose: Driver sits on top of the front axle and engine</li><li>LCF: Low Cab Forward</li><li>Conventional: Driver sits behind the engine</li><li>Non-Tilt</li><li>Tilt</li></ul>",
            "GroupName": "Exterior / Truck",
            "ID": 4,
            "Name": "Cab Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Body Class presents the body type based on 49 CFR 565.12(b): \"Body type means the general configuration or shape of a vehicle distinguished by such characteristics as the number of doors or windows, cargo-carrying features and the roofline (e.g., sedan, fastback, hatchback).\" Definitions are not provided for individual body types in the regulation.</p>",
            "GroupName": "Exterior / Body",
            "ID": 5,
            "Name": "Body Class"
        },
        {
            "DataType": "int",
            "Description": "<p>This is a numerical field to store the number of cylinders in an engine. Common values for passenger cars are 4 or 6.</p>",
            "GroupName": "Engine",
            "ID": 9,
            "Name": "Engine Number of Cylinders"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Destination Market is the market where the vehicle is intended to be sold.</p>",
            "GroupName": "General",
            "ID": 10,
            "Name": "Destination Market"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Engine displacement (in cubic centimeters) is the volume swept by all the pistons inside the cylinders of a reciprocating engine in a single movement from top dead center to bottom dead center.</p>",
            "GroupName": "Engine",
            "ID": 11,
            "Name": "Displacement (CC)"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Engine displacement (in cubic inches) is the volume swept by all the pistons inside the cylinders of a reciprocating engine in a single movement from top dead center to bottom dead center.</p>",
            "GroupName": "Engine",
            "ID": 12,
            "Name": "Displacement (CI)"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Engine displacement (in liters) is the volume swept by all the pistons inside the cylinders of a reciprocating engine in a single movement from top dead center to bottom dead center.</p>",
            "GroupName": "Engine",
            "ID": 13,
            "Name": "Displacement (L)"
        },
        {
            "DataType": "int",
            "Description": "<p>This is a numerical field to store the number of doors on a vehicle.</p>",
            "GroupName": "Exterior / Body",
            "ID": 14,
            "Name": "Doors"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Drive type stores information about vehicle drivetrain configuration. The most common drive types for passenger cars, crossover vehicles, and pickup trucks are front-wheel drive (FWD), rear-wheel drive (RWD), all-wheel drive (AWD), and 4-wheel drive (4WD).</p>",
            "GroupName": "Mechanical / Drivetrain",
            "ID": 15,
            "Name": "Drive Type"
        },
        {
            "DataType": "int",
            "Description": "<p>Engine stroke cycle is a numerical field for the number of strokes used by an internal combustion engine to complete a power cycle.</p>",
            "GroupName": "Engine",
            "ID": 17,
            "Name": "Engine Stroke Cycles"
        },
        {
            "DataType": "string",
            "Description": "<p>Engine model is a name that a manufacturer applies to a family of engine.</p>",
            "GroupName": "Engine",
            "ID": 18,
            "Name": "Engine Model"
        },
        {
            "DataType": "decimal",
            "Description": "<p>This field stores engine power in kilowatts (kW).</p>",
            "GroupName": "Engine",
            "ID": 21,
            "Name": "Engine Power (kW)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field defines the type of different entertainment systems in vehicles.</p>",
            "GroupName": "Interior",
            "ID": 23,
            "Name": "Entertainment System"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Fuel type defines the fuel used to power the vehicle. For vehicles that have two power sources, such as plug-in hybrid vehicle, both primary fuel type and secondary fuel type will be provided.</p>",
            "GroupName": "Engine",
            "ID": 24,
            "Name": "Fuel Type - Primary"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Gross vehicle weight rating (GVWR) is the maximum operating weight of a vehicle including the vehicle's chassis, body, engine, engine fluids, fuel, accessories, driver, passengers and cargo, but excluding that of the trailers. Per 49 CFR 565.15, Class 1 is further broken down to Class A-D; Class 2 is further broken down to Class E-H. This field captures the lower bound of GVWR range for the vehicle.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 25,
            "Name": "Gross Vehicle Weight Rating From"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Per 49 CFR 565, Make is a name that a manufacturer applies to a group of vehicles or engines.</p>",
            "GroupName": "General",
            "ID": 26,
            "Name": "Make"
        },
        {
            "DataType": "lookup",
            "Description": "Name of the vehicle manufacturer.",
            "GroupName": "General",
            "ID": 27,
            "Name": "Manufacturer Name"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Per 49 CFR 565, Model means a name that a manufacturer applies to a family of vehicles of the same type, make, line, series and body type.</p>",
            "GroupName": "General",
            "ID": 28,
            "Name": "Model"
        },
        {
            "DataType": "int",
            "Description": "<p>If the model year (MY) is supplied when the VIN is decoded, such as from a crash report or a vehicle registration record, the MY value will be the supplied MY, even if the MY decoded from the VIN differs from the supplied MY. If the MY is not supplied when the VIN is decoded, the MY value will be decoded from the 10th character in the VIN.</p>",
            "GroupName": "General",
            "ID": 29,
            "Name": "Model Year"
        },
        {
            "DataType": "string",
            "Description": "<p>This data element captures the city of the manufacturing plant where the manufacturer affixes the VIN.</p>",
            "GroupName": "General",
            "ID": 31,
            "Name": "Plant City"
        },
        {
            "DataType": "int",
            "Description": "<p>This data element is a numeric field to store the number of seats in a vehicle.</p>",
            "GroupName": "Interior / Seat",
            "ID": 33,
            "Name": "Number of Seats"
        },
        {
            "DataType": "string",
            "Description": "<p>Per 49 CFR 565, Series means a name that a manufacturer applies to a subdivision of a \"line\" denoting price, size or weight identification and that is used by the manufacturer for marketing purposes.</p>",
            "GroupName": "General",
            "ID": 34,
            "Name": "Series"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This data element captures the location of steering column, either on left- (LHD) or right-hand side (RHD).</p>",
            "GroupName": "Interior",
            "ID": 36,
            "Name": "Steering Location"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Transmission style provides information about the type of transmissions. The major types of transmissions are manual transmission, automatic transmission, continuously variable transmission (CVT), and dual-clutch transmission (DCT).</p> ",
            "GroupName": "Mechanical / Transmission",
            "ID": 37,
            "Name": "Transmission Style"
        },
        {
            "DataType": "string",
            "Description": "<p>Trim levels further identify a vehicle by a particular set of special features. Higher trim levels either will add to the features of the base (entry-level model), or replace them with something else.</p>",
            "GroupName": "General",
            "ID": 38,
            "Name": "Trim"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field defines the type of the vehicle based on the World Manufacturer Identifier (WMI).</p>",
            "GroupName": "General",
            "ID": 39,
            "Name": "Vehicle Type"
        },
        {
            "DataType": "int",
            "Description": "<p>This field defines the number of windows on a vehicle.</p>",
            "GroupName": "Exterior / Body",
            "ID": 40,
            "Name": "Windows"
        },
        {
            "DataType": "int",
            "Description": "<p>This numerical field defines the number of axles on a vehicle.</p>",
            "GroupName": "Mechanical / Drivetrain",
            "ID": 41,
            "Name": "Axles"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Brake system type is the type of brake systems used to stop and hold the vehicle or combination of motor vehicles.</p>",
            "GroupName": "Mechanical / Brake",
            "ID": 42,
            "Name": "Brake System Type"
        },
        {
            "DataType": "int",
            "Description": "<p>This field stores the information about how battery cells are arranged for a vehicle.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 48,
            "Name": "Number of Battery Cells per Module"
        },
        {
            "DataType": "int",
            "Description": "<p>Defines the length of the pickup truck bed in inches.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 49,
            "Name": "Bed Length (inches)"
        },
        {
            "DataType": "string",
            "Description": "<p>This field provides additional details about the brake system.</p>",
            "GroupName": "Mechanical / Brake",
            "ID": 52,
            "Name": "Brake System Description"
        },
        {
            "DataType": "int",
            "Description": "<p>Curb weight (in pounds) is the total weight of a vehicle with standard equipment, all necessary operating consumables such as motor oil, transmission oil, coolant, air conditioning refrigerant, and a full tank of fuel, while not loaded with either passengers or cargo.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 54,
            "Name": "Curb Weight (pounds)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field captures the location of curtain air bags. Curtain air bags are side air bags that protect the head.</p>",
            "GroupName": "Passive Safety System / Air Bag Location",
            "ID": 55,
            "Name": "Curtain Air Bag Locations"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field captures the location of seat cushion air bags, used as a supplement to the seat belts to help prevent the front passenger from sliding forward in the event of a front impact collision.</p>",
            "GroupName": "Passive Safety System / Air Bag Location",
            "ID": 56,
            "Name": "Seat Cushion Air Bag Locations"
        },
        {
            "DataType": "int",
            "Description": "<p>Battery Current (Amps) From field stores the lower value for battery current range in the unit of amperes (amps).</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 57,
            "Name": "Battery Current (Amps) From"
        },
        {
            "DataType": "int",
            "Description": "<p>Battery Voltage (Volts) From field stores the lower bound for battery voltage range in the unit of volts.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 58,
            "Name": "Battery Voltage (Volts) From"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Battery Energy (kWh) From field stores the lower bound of battery energy range in the unit of kilowatt-hour (kWh).</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 59,
            "Name": "Battery Energy (kWh) From"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field describes the wheel base variations for some trucks and passenger cars, relative to other variants of the vehicle model. This field may have values such as short, standard, long, extra long, or super long.</p>",
            "GroupName": "Exterior / Body",
            "ID": 60,
            "Name": "Wheel Base Type"
        },
        {
            "DataType": "int",
            "Description": "<p>This data element is a numeric field to capture the number of rows of seats in a vehicle.</p>",
            "GroupName": "Interior / Seat",
            "ID": 61,
            "Name": "Number of Seat Rows"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Valve train design defines engine camshaft design and control. Common values are single overhead cam (SOHC), dual overhead cam (DOHC), overhead valve (OHV), etc.</p>",
            "GroupName": "Engine",
            "ID": 62,
            "Name": "Valve Train Design"
        },
        {
            "DataType": "int",
            "Description": "<p>Transmission speed is a numerical field to capture the number of speeds for a transmission, such as 6 for a six-speed automatic or manual transmission.</p>",
            "GroupName": "Mechanical / Transmission",
            "ID": 63,
            "Name": "Transmission Speeds"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Engine configuration defines how engine cylinders are arranged. Common values are V6 for V-shaped arrangement, I4 or L4 for in-line arrangement.</p>",
            "GroupName": "Engine",
            "ID": 64,
            "Name": "Engine Configuration"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field captures the location of frontal air bags. Frontal air bags are generally designed to deploy in \"moderate to severe\" frontal or near-frontal crashes.</p>",
            "GroupName": "Passive Safety System / Air Bag Location",
            "ID": 65,
            "Name": "Front Air Bag Locations"
        },
        {
            "DataType": "lookup",
            "Description": "Fuel type defines the fuel used to power the vehicle. For vehicles that have two power sources, such as plug-in hybrid vehicle, both primary fuel type and secondary fuel type will be provided.",
            "GroupName": "Engine",
            "ID": 66,
            "Name": "Fuel Type - Secondary"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Fuel Delivery / Fuel Injection Type defines the mechanism through which fuel is delivered to the engine.</p>",
            "GroupName": "Engine",
            "ID": 67,
            "Name": "Fuel Delivery / Fuel Injection Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field captures the location of knee air bags, which deploy from a car's lower dashboard, are meant to distribute impact forces on an occupant's legs in the case of a crash, thereby reducing leg injuries.</p>",
            "GroupName": "Passive Safety System / Air Bag Location",
            "ID": 69,
            "Name": "Knee Air Bag Locations"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Engine brake is the horsepower (hp) at the engine output shaft. Engine Brake (hp) From is the lower value of the range.</p>",
            "GroupName": "Engine",
            "ID": 71,
            "Name": "Engine Brake (hp) From"
        },
        {
            "DataType": "lookup",
            "Description": "<p>EV Drive Unit field stores electric vehicle (EV) motor configuration for single or dual motor.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 72,
            "Name": "EV Drive Unit"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This data element captures the country of the manufacturing plant where the manufacturer affixes the VIN.</p>",
            "GroupName": "General",
            "ID": 75,
            "Name": "Plant Country"
        },
        {
            "DataType": "string",
            "Description": "<p>This data element captures the name of the company that owns the manufacturing plant  where the manufacturer affixes the VIN.</p>",
            "GroupName": "General",
            "ID": 76,
            "Name": "Plant Company Name"
        },
        {
            "DataType": "string",
            "Description": "<p>This data element captures the State or Province name within the Plant Country of the manufacturing plant where the manufacturer affixes the VIN.</p>",
            "GroupName": "General",
            "ID": 77,
            "Name": "Plant State"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This yes/no field captures whether or not the vehicle has a pretensioner, a device designed to make seatbelts even more effective by removing the slack from a seatbelt as soon as a crash is detected or if the system senses excessive seatbelt tension on the driver's or passenger's seatbelt.</p>",
            "GroupName": "Passive Safety System",
            "ID": 78,
            "Name": "Pretensioner"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field describes the type of seat belt, such as manual or automatic. Automatic seat belts automatically close over riders in a vehicle. Automatic seat belts were mainly used in some older model GM, Nissan, and Honda vehicles and are rarely seen now.</p>",
            "GroupName": "Passive Safety System",
            "ID": 79,
            "Name": "Seat Belt Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>ACC automatically adjusts the vehicle’s speed to keep a pre-set distance from the vehicle in front of it.</p>",
            "GroupName": "Active Safety System / Maintaining Safe Distance",
            "ID": 81,
            "Name": "Adaptive Cruise Control (ACC)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Anti-lock Braking System (ABS) means a portion of a service brake system that automatically controls the degree of rotational wheel slip during braking by: (1) Sensing the rate of angular rotation of the wheels; (2) Transmitting signals regarding the rate of wheel angular rotation to one or more controlling devices that interpret those signals and generate responsive controlling output signals; and (3) Transmitting those controlling signals to one or more modulator devices that adjust brake actuating forces in response to those signals.</p>",
            "GroupName": "Active Safety System",
            "ID": 86,
            "Name": "Anti-lock Braking System (ABS)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A CIB system is an automatic emergency braking system designed to detect an impending forward crash with another vehicle. CIB systems automatically apply the brakes in a crash imminent situation to slow or stop the vehicle, avoiding the crash or reducing its severity, if the driver does not brake in response to a forward collision alert.</p>",
            "GroupName": "Active Safety System / Forward Collision Prevention",
            "ID": 87,
            "Name": "Crash Imminent Braking (CIB)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>BSW alerts drivers with an audio or visual warning if there are vehicles in adjacent lanes that the driver may not see when making a lane change.</p>",
            "GroupName": "Active Safety System / Lane and Side Assist",
            "ID": 88,
            "Name": "Blind Spot Warning (BSW)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An internal NHTSA field to capture the body type of the vehicle.</p>",
            "GroupName": "Internal",
            "ID": 96,
            "Name": "NCSA Body Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An internal NHTSA field to capture the Make of the vehicle.</p>",
            "GroupName": "Internal",
            "ID": 97,
            "Name": "NCSA Make"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An internal NHTSA field to capture the Model of the vehicle.</p>",
            "GroupName": "Internal",
            "ID": 98,
            "Name": "NCSA Model"
        },
        {
            "DataType": "lookup",
            "Description": "<p>ESC is a computerized technology that improves a vehicle's stability by detecting and reducing loss of traction (skidding). When ESC detects loss of steering control, it automatically applies the brakes to help steer the vehicle in the driver's intended direction. Braking is automatically applied to wheels individually, such as the outer front wheel to counter oversteer, or the inner rear wheel to counter understeer. Some ESC systems also reduce engine power until control is regained.</p>",
            "GroupName": "Active Safety System",
            "ID": 99,
            "Name": "Electronic Stability Control (ESC)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>When the traction control computer detects a driven wheel or wheels spinning significantly faster than another, it invokes an electronic control unit to apply brake friction to wheels spinning due to loss of traction. This braking action on slipping wheels will cause power transfer to the wheels with traction due to the mechanical action within the differential.</p>",
            "GroupName": "Active Safety System",
            "ID": 100,
            "Name": "Traction Control"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An FCW system monitors a vehicle's speed, the speed of the vehicle in front of it, and the distance between the vehicles. If the vehicles get too close due to the speed of either vehicle, the FCW system will warn the driver of the rear vehicle of an impending crash so that the driver can apply the brakes or take evasive action, such as steering, to prevent a potential crash. FCW systems provide an audible, visual, or haptic warning, or any combination thereof, to alert the driver of an FCW-equipped vehicle of a potential collision.</p>",
            "GroupName": "Active Safety System / Forward Collision Prevention",
            "ID": 101,
            "Name": "Forward Collision Warning (FCW)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An LDW system monitors lane markings and alerts the driver if their vehicle drifts out of their lane without a turn signal or any control input indicating the lane departure is intentional. An audio, visual or other alert warns the driver of the unintentional lane shift so the driver can steer the vehicle back into its lane.</p>",
            "GroupName": "Active Safety System / Lane and Side Assist",
            "ID": 102,
            "Name": "Lane Departure Warning (LDW)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An LKA system prevents a driver from unintentionally drifting out of the intended travel lane. LKA systems use information provided by Lane Departure Warning (LDW) system sensors to determine whether a vehicle is about to unintentionally move out of its lane of travel. If so, LKA activates and corrects the steering, brakes or accelerates one or more wheels, or does both, resulting in the vehicle returning to its intended lane of travel.</p>",
            "GroupName": "Active Safety System / Lane and Side Assist",
            "ID": 103,
            "Name": "Lane Keeping Assistance (LKA)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A backup camera, also known as a rearview video system, helps prevent back-over crashes and protects our most vulnerable people - children and senior citizens - by providing an image of the area behind the vehicle. A backup camera helps the driver see behind the vehicle while in reverse.</p>",
            "GroupName": "Active Safety System / Backing Up and Parking",
            "ID": 104,
            "Name": "Backup Camera"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A parking assist system uses computer processors, back up cameras, surround-view cameras, and sensors to assist with steering and other functions during parking. Drivers may be required to accelerate, brake, or select gear position. Some systems are capable of parallel and perpendicular parking. Drivers must constantly supervise this support feature and maintain responsibility for parking.</p>",
            "GroupName": "Active Safety System / Backing Up and Parking",
            "ID": 105,
            "Name": "Parking Assist"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field captures the location of side air bags, typically designed for three areas of added protection: chest/torso, head, or both.</p>",
            "GroupName": "Passive Safety System / Air Bag Location",
            "ID": 107,
            "Name": "Side Air Bag Locations"
        },
        {
            "DataType": "string",
            "Description": "This data element captures additional information about trim of the vehicle.",
            "GroupName": "General",
            "ID": 109,
            "Name": "Trim2"
        },
        {
            "DataType": "string",
            "Description": "<p>This data element captures additional information about series of the vehicle.</p>",
            "GroupName": "General",
            "ID": 110,
            "Name": "Series2"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Wheel base is the distance between the centers of the front and rear wheels measured in inches. This field captures the lower bound of the wheel base range.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 111,
            "Name": "Wheel Base (inches) From"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Wheel base is the distance between the centers of the front and rear wheels measured in inches. This field captures the upper bound of the wheel base range.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 112,
            "Name": "Wheel Base (inches) To"
        },
        {
            "DataType": "string",
            "Description": "<p>Note is used to store any additional information that does not correspond to any of the specified fields on the interface. This is a catch-all element for systems other than for engine, restraint system, brake and battery. Engine, restraint system, brake, and battery have their own note elements.</p>",
            "GroupName": "General",
            "ID": 114,
            "Name": "Note"
        },
        {
            "DataType": "int",
            "Description": "<p>This field captures the number of wheels on a vehicle.</p>",
            "GroupName": "Exterior / Wheel tire",
            "ID": 115,
            "Name": "Number of Wheels"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Trailer Type Connection describes the connector or tongue used for the trailers.</p>",
            "GroupName": "Exterior / Trailer",
            "ID": 116,
            "Name": "Trailer Type Connection"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Trailer Body Type describes the purpose of the trailer or how it is designed to be used.</p>",
            "GroupName": "Exterior / Trailer",
            "ID": 117,
            "Name": "Trailer Body Type"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Trailer length is the length of the trailer in feet from the front of the connector to the end of the trailer.</p>",
            "GroupName": "Exterior / Trailer",
            "ID": 118,
            "Name": "Trailer Length (feet)"
        },
        {
            "DataType": "int",
            "Description": "<p>This field captures the diameter of the front wheel in inches.</p>",
            "GroupName": "Exterior / Wheel tire",
            "ID": 119,
            "Name": "Wheel Size Front (inches)"
        },
        {
            "DataType": "int",
            "Description": "<p>This field captures the diameter of the rear wheel in inches.</p>",
            "GroupName": "Exterior / Wheel tire",
            "ID": 120,
            "Name": "Wheel Size Rear (inches)"
        },
        {
            "DataType": "string",
            "Description": "<p>Other Restraint Info field is used to code additional information about restraint system that cannot be coded in any other restraint fields.</p>",
            "GroupName": "Passive Safety System",
            "ID": 121,
            "Name": "Other Restraint System Info"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Cooling type defines the cooling system used to control the engine temperature. It can be either air-cooled or water-cooled.</p>",
            "GroupName": "Engine",
            "ID": 122,
            "Name": "Cooling Type"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Engine brake is the horsepower (hp) at the engine output shaft. Engine Brake (hp) To is the upper value of the range.</p>",
            "GroupName": "Engine",
            "ID": 125,
            "Name": "Engine Brake (hp) To"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Electrification level defines to what level the vehicle is powered by electric system. The common electric system configurations are mild hybrid, strong hybrid, plug-in hybrid, battery electric, and fuel cell vehicles.</p><p>(1) Mild hybrid is the system such as 12-volt start-stop or 48-volt belt integrator starter generator (BISG) system that uses an electric motor to add assisting power to the internal combustion engine. The system has features such as stop-start, power assist, and mild level of generative braking features.</p><p>(2) Strong hybrid systems, in vehicles such as the Toyota Prius, mainly consist of motors, conventional gasoline engine, and battery, but the source of electrical charge for the battery power is provided by the conventional engine and/or regenerative braking.</p><p>(3) Plug-in hybrid systems, in vehicles such as the Toyota Rav4 Prime, mainly consist of motors, conventional gasoline engine and battery. Plug-in hybrid vehicles are like strong hybrids, but they have a larger battery pack and can be charged with an external source of electricity by electric vehicle supply equipment (EVSE).</p><p>(4) Battery electric vehicles (BEV), such as the Tesla Model S or Nissan Leaf, have only a battery and electrical motor components and use electricity as the only power source.</p><p>(5) Fuel cell electric vehicles (FCEV) use full electric drive platforms but consume electricity generated by onboard fuel cells and hydrogen fuel.</p>",
            "GroupName": "Engine",
            "ID": 126,
            "Name": "Electrification Level"
        },
        {
            "DataType": "lookup",
            "Description": "<p>There are three levels of battery chargers currently. Level 1 and 2 are AC chargers; Level 3 is a DC charger. Chargers at each level charge batteries with different voltage and current levels. Level 3 is the fastest charging.</p><p>-Level 1</p><ul><li>AC charger.</li><li>In North America this typically means 16 amps at 120 volts delivering 1.9 kW of power.</li><li>In Europe it may be 13 or 16 amps at 240 volts delivering 3 kW of power.</li><li>The EV may incorporate a standard domestic power cord to connect the vehicle to a domestic socket outlet or a Level 1 charging station.</li></ul><p>-Level 2</p><ul><li>AC charger.</li><li>It delivers up to 20 kW of power from either single- or three-phase alternating current (AC) sources of 208-240 volts at up to 80 amps.</li></ul><p>-Level 3</p><ul><li>DC charging, or \"fast charging.\"</li><li>To achieve very short charging times, Level 3 chargers supply very high currents of up to 400 amps at voltages up to 600 volts DC delivering a maximum power of 240 kW.</li></ul>",
            "GroupName": "Mechanical / Battery / Charger",
            "ID": 127,
            "Name": "Charger Level"
        },
        {
            "DataType": "int",
            "Description": "<p>Charger power stores the power of the charging circuit on board in kilowatts (kW).</p>",
            "GroupName": "Mechanical / Battery / Charger",
            "ID": 128,
            "Name": "Charger Power (kW)"
        },
        {
            "DataType": "string",
            "Description": "<p>This is a catch-all field for storing additional engine information that does not fit in any of the other engine fields.</p>",
            "GroupName": "Engine",
            "ID": 129,
            "Name": "Other Engine Info"
        },
        {
            "DataType": "int",
            "Description": "<p>Battery Current (Amps) To field stores the higher value for battery current range in the unit of amperes (amps).</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 132,
            "Name": "Battery Current (Amps) To"
        },
        {
            "DataType": "int",
            "Description": "<p>Battery Voltage (Volts) To field stores the upper bound for battery voltage range in the unit of volts.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 133,
            "Name": "Battery Voltage (Volts) To"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Battery Energy (kWh) To field stores the upper bound of battery energy range in the unit of kilowatt-hour (kWh).</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 134,
            "Name": "Battery Energy (kWh) To"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Turbo is a yes/no field to identify whether the engine is turbo-charged or not.</p>",
            "GroupName": "Engine",
            "ID": 135,
            "Name": "Turbo"
        },
        {
            "DataType": "decimal",
            "Description": "<p>Base price of the vehicle is the cost of a new vehicle with only the standard  equipment and factory warranty. It is the cost without any optional packages.</p>",
            "GroupName": "General",
            "ID": 136,
            "Name": "Base Price ($)"
        },
        {
            "DataType": "int",
            "Description": "<p>This field stores the information about how battery modules are arranged for a vehicle.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 137,
            "Name": "Number of Battery Modules per Pack"
        },
        {
            "DataType": "int",
            "Description": "<p>This field stores the information about how battery packs are arranged for a vehicle.</p>",
            "GroupName": "Mechanical / Battery",
            "ID": 138,
            "Name": "Number of Battery Packs per Vehicle"
        },
        {
            "DataType": "int",
            "Description": "<p>This data element captures the top speed of the vehicle in miles per hour (mph).</p>",
            "GroupName": "Engine",
            "ID": 139,
            "Name": "Top Speed (MPH)"
        },
        {
            "DataType": "string",
            "Description": "A suggested VIN is provided when there are errors in the VIN decode.",
            "GroupName": null,
            "ID": 142,
            "Name": "Suggested VIN"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Error Code is a numerical code that determines the nature of the error from VIN decode, and why it occurred.</p>",
            "GroupName": null,
            "ID": 143,
            "Name": "Error Code"
        },
        {
            "DataType": "string",
            "Description": "<p>A list of possible characters that can be used to replace the erratic characters in the VIN.</p>",
            "GroupName": null,
            "ID": 144,
            "Name": "Possible Values"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Axle configuration describes the placement of the axles in a vehicle. This field is mainly used for trucks.</p>",
            "GroupName": "Mechanical / Drivetrain",
            "ID": 145,
            "Name": "Axle Configuration"
        },
        {
            "DataType": "string",
            "Description": "<p>This data element captures the name of the engine manufacturer.</p>",
            "GroupName": "Engine",
            "ID": 146,
            "Name": "Engine Manufacturer"
        },
        {
            "DataType": "int",
            "Description": "<p>This field captures the length of bus in feet.</p>",
            "GroupName": "Exterior / Bus",
            "ID": 147,
            "Name": "Bus Length (feet)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field defines the relative height of the bus floor from the ground. Common values include normal, lift/raised, low floor, and sleeper coach. Low floor refers to a bus deck that is accessible from the sidewalk with only a single step with a small height difference, caused solely by the difference between the bus deck and sidewalk. This is distinct from high/raised floor, a bus deck design that requires climbing one or more steps to access the interior floor that is placed at a higher height. A sleeper coach is a type of specially adapted coach designed for the passengers to sleep in.</p>",
            "GroupName": "Exterior / Bus",
            "ID": 148,
            "Name": "Bus Floor Configuration Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>This field defines the type of bus. Common types include commuter coach, double deck coach, tourist coach, urban bus, transit bus, entertainer coach and motorhome.</p>",
            "GroupName": "Exterior / Bus",
            "ID": 149,
            "Name": "Bus Type"
        },
        {
            "DataType": "string",
            "Description": "Additional information about bus is captured in this field.",
            "GroupName": "Exterior / Bus",
            "ID": 150,
            "Name": "Other Bus Info"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Defines the type of customized motorcycle, including values such as bagger, chopper, cruise, touring. Custom motorcycle type is provided by the manufacturer but not defined.</p>",
            "GroupName": "Exterior / Motorcycle",
            "ID": 151,
            "Name": "Custom Motorcycle Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Defines the type of suspension in motorcycles, including values such as hardtail, softail, wing fork, etc. Motorcycle Suspension Type is provided by the manufacturer but not defined.</p>",
            "GroupName": "Exterior / Motorcycle",
            "ID": 152,
            "Name": "Motorcycle Suspension Type"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Defines the type of motorcycle chassis, including values such as trike, reversed trike/autocycle, three-wheeler, etc.</p>",
            "GroupName": "Exterior / Motorcycle",
            "ID": 153,
            "Name": "Motorcycle Chassis Type"
        },
        {
            "DataType": "string",
            "Description": "Additional information about motorcycles is captured in this field.",
            "GroupName": "Exterior / Motorcycle",
            "ID": 154,
            "Name": "Other Motorcycle Info"
        },
        {
            "DataType": "string",
            "Description": "Additional information about trailers is captured in this field.",
            "GroupName": "Exterior / Trailer",
            "ID": 155,
            "Name": "Other Trailer Info"
        },
        {
            "DataType": "string",
            "Description": "<p>This field is to store the additional description of the error text.</p>",
            "GroupName": null,
            "ID": 156,
            "Name": "Additional Error Text"
        },
        {
            "DataType": "decimal",
            "Description": "<p>A vehicle's track, or track width, is the distance in inches between the center line of each of the two wheels on the same axle on any given vehicle.</p>",
            "GroupName": "Exterior / Body",
            "ID": 159,
            "Name": "Track Width (inches)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A TPMS is an electronic system designed to monitor the air pressure inside the pneumatic tires on various types of vehicles. TPMS can be divided into two different types - direct and indirect. Direct TPMS employ pressure sensors on each wheel, either internal or external. The sensors physically measure the tire pressure in each tire and report it to the vehicle's instrument cluster or a corresponding monitor. Indirect TPMS does not use physical pressure sensors but measure air pressures by monitoring individual wheel rotational speeds and other signals available outside of the tire itself.</p>",
            "GroupName": "Active Safety System",
            "ID": 168,
            "Name": "Tire Pressure Monitoring System (TPMS) Type"
        },
        {
            "DataType": "string",
            "Description": "This field stores additional information about active safety systems in a vehicle.",
            "GroupName": "Active Safety System",
            "ID": 169,
            "Name": "Active Safety System Note"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A DBS system is an automatic emergency braking system designed to detect an impending forward crash with another vehicle. DBS systems automatically supplement the driver's braking in an effort to avoid a crash if the driver does not brake hard enough to avoid it.</p>",
            "GroupName": "Active Safety System / Forward Collision Prevention",
            "ID": 170,
            "Name": "Dynamic Brake Support (DBS)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A PAEB system provides automatic braking for vehicles when pedestrians are in front of the vehicle and the driver has not acted to avoid a crash.</p>",
            "GroupName": "Active Safety System / Forward Collision Prevention",
            "ID": 171,
            "Name": "Pedestrian Automatic Emergency Braking (PAEB)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An auto-reverse system enables power windows and sunroofs on motor vehicles to automatically reverse direction when such power windows and panels detect an obstruction. This feature can prevent children and others from being trapped, injured, or killed by the power windows and sunroofs.</p>",
            "GroupName": "Active Safety System",
            "ID": 172,
            "Name": "Auto-Reverse System for Windows and Sunroofs"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Electric vehicle warning sounds are a series of sounds designed to alert pedestrians to the presence of electric drive vehicles such as hybrid electric vehicles (HEVs), plug-in hybrid electric vehicles (PHEVs), and all-electric vehicles (EVs) travelling at low speeds. Vehicles operating in all-electric mode produce less noise than traditional combustion engine vehicles and can make it more difficult for pedestrians, the blind, cyclists, and others to be aware of their presence.</p>",
            "GroupName": "Active Safety System",
            "ID": 173,
            "Name": "Automatic Pedestrian Alerting Sound (for Hybrid and EV only)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An ACN system notifies emergency responders that a crash has occurred and provides its location.</p>",
            "GroupName": "Active Safety System / 911 Notification",
            "ID": 174,
            "Name": "Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>An EDR is a device installed in motor vehicles to record technical vehicle and occupant information for a brief period before, during, and after a triggering event, typically a crash or near-crash event. Sometimes referred to as \"black-box\" data, these data or event records can be valuable when analyzing and reconstructing crashes.</p>",
            "GroupName": "Active Safety System",
            "ID": 175,
            "Name": "Event Data Recorder (EDR)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A keyless ignition system permits starting a car without a physical key being inserted into an ignition. Instead, a small device known as a \"key fob\" transmits a code to a computer in the vehicle when the fob is within a certain close range. When the coded signal matches the code embedded in the vehicle's computer, a number of systems within the car are activated, including the starter system. This allows the car to be started by simply pressing a button on the dashboard while the key fob is left in a pocket or a purse. The vehicle is usually shut down by pushing the same button.</p>",
            "GroupName": "Active Safety System",
            "ID": 176,
            "Name": "Keyless Ignition"
        },
        {
            "DataType": "lookup",
            "Description": "<p>DRL is an automotive lighting system on the front of a vehicle or bicycle, that automatically switches on when the vehicle is in drive, and emits white, yellow, or amber light to increase the conspicuity of the vehicle during daylight conditions.</p>",
            "GroupName": "Active Safety System / Lighting Technologies",
            "ID": 177,
            "Name": "Daytime Running Light (DRL)"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A headlamp light source provides a distribution of light designed to provide adequate forward and lateral illumination with limits on light directed towards the eyes of other road users, to control glare. This beam is intended for use whenever other vehicles are present ahead. Halogen, high-Intensity discharge (HID), light-emitting diode (LED), and laser are the most common headlights on the market.</p>",
            "GroupName": "Active Safety System / Lighting Technologies",
            "ID": 178,
            "Name": "Headlamp Light Source"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A semi-automatic headlamp beam switching device provides automatic or manual control of beam switching at the option of the driver. When the control is automatic, the headlamps switch from the upper beam to the lower beam when illuminated by the headlamps on an approaching car and switch back to the upper beam when the road ahead is dark. When the control is manual, the driver may obtain either beam manually regardless of the condition of lights ahead of the vehicle.</p>",
            "GroupName": "Active Safety System / Lighting Technologies",
            "ID": 179,
            "Name": "Semiautomatic Headlamp Beam Switching"
        },
        {
            "DataType": "lookup",
            "Description": "<p>ADB is a type of front-lighting system that lets upper beam headlamps adapt their beam patterns to create shaded areas around oncoming and preceding vehicles to improve long-range visibility for the driver without causing discomfort, distraction, or glare to other road users.</p>",
            "GroupName": "Active Safety System / Lighting Technologies",
            "ID": 180,
            "Name": "Adaptive Driving Beam (ADB)"
        },
        {
            "DataType": "int",
            "Description": "<p>SAE stands for the Society of Automotive Engineers, which changed its name to SAE International in 2006. This field indicates the lower bound of intelligence level and automation capabilities of vehicles, ranking from 0 to 5, per SAE Standard J3016 2018.</p>",
            "GroupName": "Active Safety System",
            "ID": 181,
            "Name": "SAE Automation Level From"
        },
        {
            "DataType": "int",
            "Description": "<p>SAE stands for the Society of Automotive Engineers, which changed its name to SAE International in 2006. This field indicates the higher bound of intelligence level and automation capabilities of vehicles, ranking from 0 to 5, per SAE Standard J3016 2018.</p>",
            "GroupName": "Active Safety System",
            "ID": 182,
            "Name": "SAE Automation Level To"
        },
        {
            "DataType": "lookup",
            "Description": "<p>A rear cross traffic alert system warns the driver of a potential collision, while in reverse, which may be outside the view of the backup camera.</p>",
            "GroupName": "Active Safety System / Backing Up and Parking",
            "ID": 183,
            "Name": "Rear Cross Traffic Alert"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Gross combination weight rating (GCWR) is the maximum allowable combined mass of a road vehicle, the passengers and cargo in the tow vehicle, plus the mass of the trailer and cargo in the trailer. This rating is set by the vehicle manufacturer. This field captures the lower bound of GCWR range for the vehicle.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 184,
            "Name": "Gross Combination Weight Rating From"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Gross combination weight rating (GCWR) is the maximum allowable combined mass of a road vehicle, the passengers and cargo in the tow vehicle, plus the mass of the trailer and cargo in the trailer. This rating is set by the vehicle manufacturer. This field captures the higher bound of GCWR range for the vehicle.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 185,
            "Name": "Gross Combination Weight Rating To"
        },
        {
            "DataType": "string",
            "Description": "<p>This internal field is to note the logic behind the NCSA mapping in special cases.</p>",
            "GroupName": "Internal",
            "ID": 186,
            "Name": "NCSA Note"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Gross vehicle weight rating (GVWR) is the maximum operating weight of a vehicle including the vehicle's chassis, body, engine, engine fluids, fuel, accessories, driver, passengers and cargo, but excluding that of the trailers. Per 49 CFR 565.15, Class 1 is further broken down to Class A-D; Class 2 is further broken down to Class E-H. This field captures the higher bound of GVWR range for the vehicle.</p>",
            "GroupName": "Exterior / Dimension",
            "ID": 190,
            "Name": "Gross Vehicle Weight Rating To"
        },
        {
            "DataType": "string",
            "Description": "<p>Error Text</p>",
            "GroupName": null,
            "ID": 191,
            "Name": "Error Text"
        },
        {
            "DataType": "lookup",
            "Description": "A rear automatic braking system uses sensors, like parking sensors and the backup camera, to detect objects behind the vehicle. If the system detects a potential collision while in reverse, it automatically applies the brakes if a crash is imminent.",
            "GroupName": "Active Safety System / Backing Up and Parking",
            "ID": 192,
            "Name": "Rear Automatic Emergency Braking"
        },
        {
            "DataType": "lookup",
            "Description": "<p>BSI helps prevent a collision with a vehicle in the driver’s blind spot. If the driver ignores the blind spot warning and starts to change to a lane where there’s a vehicle, the system activates and automatically applies light braking pressure, or provides steering input, to guide the vehicle back into the original lane. The system monitors for vehicles in the driver’s blind spot using rear-facing cameras or proximity sensors.</p>",
            "GroupName": "Active Safety System / Lane and Side Assist",
            "ID": 193,
            "Name": "Blind Spot Intervention (BSI)"
        },
        {
            "DataType": "lookup",
            "Description": "A lane centering assistance system utilizes a camera-based vision system designed to monitor the vehicle’s lane position and automatically and continuously apply steering inputs needed to keep the vehicle centered within its lane.",
            "GroupName": "Active Safety System / Lane and Side Assist",
            "ID": 194,
            "Name": "Lane Centering Assistance"
        },
        {
            "DataType": "lookup",
            "Description": "<p>Non-Land Use data element identifies the non-land use of the vehicle when a vehicle is designed to be used off land (e.g., an amphibious vehicle).</p><ul><li>Air: identifies vehicles that can be driven on land and in the air</li><li>Air and Water: identifies vehicles that can be driven on land, in the air and on or under water</li><li>Water: identifies vehicles that can be driven on land and on or under water</li></ul><br>",
            "GroupName": "General",
            "ID": 195,
            "Name": "Non-Land Use"
        },
        {
            "DataType": "string",
            "Description": "Vehicle Descriptor is VIN without PII (sequential number)",
            "GroupName": null,
            "ID": 196,
            "Name": "Vehicle Descriptor"
        }
    ]
}