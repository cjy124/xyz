# Confirmation Validation Proposal

#### Keys requirements
1. Delivered to recipient in digital format astehtically and easily validated
2. Confirmation's integrity and indicator of validity
3. Details of bookings presented after validation

#### Proposed solution to key requirements
1. Itinerary will be delivered to the email registered during the application
	- QRcode to be included in the itinerary
2. Recipient will have the QRcode scanned at point of interest, and validated with a backend application
	- Backend application will validate the QRcode against the generated unique key stored in database upon approval of application
	- If QRcode is not registered in the database, it will be deemed as a fraud
	- Backend application will return the application details, and personnel at point of interest to verify
	- After verification, personnel at point of interest will confirm and backend application will update validity of QRcode to used
3. Application details will be presented after validation with a backend application
	- Details of the application will be pulled from the database

#### Advantages
1. QRcode provides for a quick and astehtically pleasing way ot storing information
	- Has good fault tolerance
	- Familarity of use
2. Familarity of check-in process
	- Ease of use for both the personnel doing the validation, and the one checking-in
	- Faster checking-in process

#### Limitations
1. Applicaitons needs a registered email
2. Point of check-in needs a camera to scan QRcode

#### Technical implementation of proposed solution
1. Backend application will be running on Spring Boot framework
	- spring-boot-starter-mail to send itinerary to recipient's email
	- Java UUID to generate unique random key for each application
	- zxing library to generate qrcode based on unique key of each application
2. Frontend applicaiton developed with Reactjs
	- react-qr-reader to open device native camera to capture and get text from QRcode
3. Backend api to return validation result
	- DAO to retrieve application details from database