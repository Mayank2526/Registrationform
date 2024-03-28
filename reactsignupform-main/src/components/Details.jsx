

// export default UserManagement;
// import React, { useState } from 'react';

// const UserManagement = () => {
//     const [newUsername, setNewUsername] = useState('');
//     const [newName, setNewName] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const userData = JSON.parse(localStorage.getItem('useryoutube')) || [];

//     return (
//         <>
//             <div className="container mt-3">
//                 <h3 className='text-center'>User List</h3>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
                       
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{editIndex === index ? <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} /> : user.email.split('@')[0]}</td>
//                                 <td>{editIndex === index ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : user.name}</td>
//                                 <td>
//                                     {editIndex === index ? (
//                                         <> 
//                                         </>
//                                     ) : null }
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default UserManagement;



// import React, { useState } from 'react';

// const UserManagement = () => {
//     const [newUsername, setNewUsername] = useState('');
//     const [newName, setNewName] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const userData = JSON.parse(localStorage.getItem('useryoutube')) || [];

//     return (
//         <>
//             <div className="container mt-3">
//                 <h3 className='text-center'>User List</h3>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 {/* Display username */}
//                                 <td>{editIndex === index ? <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} /> : user.email.split('@')[0]}</td>
//                                 {/* Display name */}
//                                 <td>{editIndex === index ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : user.name}</td>
//                                 <td>
//                                     {editIndex === index ? (
//                                         <> 
//                                         </>
//                                     ) : null }
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default UserManagement;
// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <>
//             <div className="container mt-3 bg-warning">
//                 <h3 className='text-center'>User Management</h3>
//                 {isLoggedIn && <div className="text-center mb-3">Logged in as: {currentLoginUser}</div>}
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default UserManagement;
// import React, { useState } from 'react';

// const UserManagement = () => {
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         const user = userData.find(user => user.email === email && user.password === password);
//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userData.map((user, index) => (
//                         user.email !== currentLoginUser && (
//                             <tr key={index}>
//                                 <td>{user.email.split('@')[0]}</td>
//                                 <td>{user.name}</td>
//                             </tr>
//                         )
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserManagement;


// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
//     const handleLogin = () => {
//         const user = userData.find(user => user.email === email && user.password === password);
//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Name</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userData.map((user, index) => (
//                         user.email !== currentLoginUser && (
//                             <tr key={index}>
//                                 <td>{user.email.split('@')[0]}</td>
//                                 <td>{user.name}</td>
//                                 <td>
//                                     <button className="btn btn-success btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                 </td>
//                             </tr>
//                         )
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserManagement;



// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
//     const handleLogin = () => {
//         const user = userData.find(user => user.email === email && user.password === password);
//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Name</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userData.map((user, index) => (
//                         user.email !== currentLoginUser && (
//                             <tr key={index}>
//                                 <td>{user.email.split('@')[0]}</td>
//                                 <td>{user.name}</td>
//                                 <td>
//                                     <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                 </td>
//                             </tr>
//                         )
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserManagement;


//--------------------------


// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
//     const handleLogin = () => {
//         const user = userData.find(user => user.email === email && user.password === password);
//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;
//-------------------------------------

// orignal code 
// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
// const handleLogin = () => {
//     let user;

//     // Check if the password is encrypted
//     const encryptedPassword = passwords[email];
//     if (encryptedPassword) {
//         const bytes  = CryptoJS.AES.decrypt(encryptedPassword, 'secret');
//         const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
//         user = userData.find(u => u.email === email && (u.password === password || u.password === decryptedPassword));
//     } else {
//         user = userData.find(u => u.email === email && u.password === password);
//     }

//     if (user) {
//         setCurrentLoginUser(user.email);
//         setIsLoggedIn(true);
//     } else {
//         alert('Invalid email or password');
//     }
// };


//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;
//-----------------

// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
//     const handleLogin = () => {
//         let user;

//         // Check if the password is encrypted
//         const encryptedPassword = passwords[email];
//         if (encryptedPassword) {
//             const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret');
//             const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
//             if (decryptedPassword === password) {
//                 user = userData.find(u => u.email === email);
//             }
//         }

//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;



//----------------------------------------------

// --- refresh 
// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
//     const [password, setPassword] = useState(localStorage.getItem('userPassword') || '');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
// const handleLogin = () => {
//     let user;
//     let isPasswordMatch = false;

//     // Find the user with the entered email
//     const userWithEmail = userData.find(u => u.email === email);

//     if (userWithEmail) {
//         // Check if the password is encrypted
//         const encryptedPassword = passwords[email];
//         if (encryptedPassword) {
//             const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret');
//             const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
//             if (decryptedPassword === password) {
//                 isPasswordMatch = true;
//             }
//         } else {
//             // Check if the entered password matches the plain text password
//             if (userWithEmail.password === password) {
//                 isPasswordMatch = true;
//             }
//         }
//     }

//     // Handle login based on whether the email and password match
//     if (userWithEmail && isPasswordMatch) {
//         user = userWithEmail;
//     }

//     // Perform login or show error message
//     if (user) {
//         setCurrentLoginUser(user.email);
//         setIsLoggedIn(true);
//     } else {
//         alert('Invalid email or password');
//     }
// };



//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//             localStorage.setItem('userEmail', value);
//         } else if (name === 'password') {
//             setPassword(value);
//             localStorage.setItem('userPassword', value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;

//-----------------------------

//---- highlight user
// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
//     const [password, setPassword] = useState(localStorage.getItem('userPassword') || '');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
//     const handleLogin = () => {
//         let user;
//         let isPasswordMatch = false;

//         // Find the user with the entered email
//         const userWithEmail = userData.find(u => u.email === email);

//         if (userWithEmail) {
//             // Check if the password is encrypted
//             const encryptedPassword = passwords[email];
//             if (encryptedPassword) {
//                 const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret');
//                 const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
//                 if (decryptedPassword === password) {
//                     isPasswordMatch = true;
//                 }
//             } else {
//                 // Check if the entered password matches the plain text password
//                 if (userWithEmail.password === password) {
//                     isPasswordMatch = true;
//                 }
//             }
//         }

//         // Handle login based on whether the email and password match
//         if (userWithEmail && isPasswordMatch) {
//             user = userWithEmail;
//         }

//         // Perform login or show error message
//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//             localStorage.setItem('userEmail', value);
//         } else if (name === 'password') {
//             setPassword(value);
//             localStorage.setItem('userPassword', value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index} className={user.email === currentLoginUser ? 'table-active' : ''}>
//                                 <td>{user.email.split('@')[0]}</td>
//                                 <td>{user.name}</td>
//                                 <td>
//                                     <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;

//----------------------


// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
//     const [password, setPassword] = useState(localStorage.getItem('userPassword') || '');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//     }, [userData]);

//     // Function to handle user login
//     const handleLogin = () => {
//         let user;
//         let isPasswordMatch = false;

//         // Find the user with the entered email
//         const userWithEmail = userData.find(u => u.email === email);

//         if (userWithEmail) {
//             // Check if the password is encrypted
//             const encryptedPassword = passwords[email];
//             if (encryptedPassword) {
//                 const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret');
//                 const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
//                 if (decryptedPassword === password) {
//                     isPasswordMatch = true;
//                 }
//             } else {
//                 // Check if the entered password matches the plain text password
//                 if (userWithEmail.password === password) {
//                     isPasswordMatch = true;
//                 }
//             }
//         }

//         // Handle login based on whether the email and password match
//         if (userWithEmail && isPasswordMatch) {
//             user = userWithEmail;
//         }

//         // Perform login or show error message
//         if (user) {
//             setCurrentLoginUser(user.email);
//             setIsLoggedIn(true);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//             localStorage.setItem('userEmail', value);
//         } else if (name === 'password') {
//             setPassword(value);
//             localStorage.setItem('userPassword', value);
//         } else if (name === 'newPassword') {
//             setNewPassword(value);
//         } else if (name === 'confirmPassword') {
//             setConfirmPassword(value);
//         }
//     };

// // Function to handle updating password
// const handleUpdatePassword = () => {
//     if (newPassword === confirmPassword) {
//         const encryptedPassword = CryptoJS.AES.encrypt(newPassword, 'secret').toString();
//         const decryptedPassword = newPassword; // Store plain text password
//         const updatedPasswords = { ...passwords, [currentLoginUser]: encryptedPassword };
//         setPasswords(updatedPasswords);
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         console.log('Updated password:', decryptedPassword); // Log updated password
//         localStorage.setItem('updated_password', decryptedPassword); // Store plain text password in local storage
//         alert('Password updated successfully');
//     } else {
//         alert('Passwords do not match');
//     }
// };




//     // Function to handle deleting user account
//     const handleDeleteAccount = () => {
//         const filteredUserData = userData.filter(user => user.email !== currentLoginUser);
//         setUserData(filteredUserData);
//         localStorage.setItem('useryoutube', JSON.stringify(filteredUserData));
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//         alert('Account deleted successfully');
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 bg-warning">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <div className="mb-2">
//                             <input type="password" name="newPassword" value={newPassword} onChange={handleInputChange} placeholder="New Password" />
//                             <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} placeholder="Confirm New Password" />
//                             <button className="btn btn-primary ml-2" onClick={handleUpdatePassword}>Update Password</button>
//                         </div>
//                         <button className="btn btn-danger mr-2" onClick={handleDeleteAccount}>Delete Account</button>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index} className={user.email === currentLoginUser ? 'table-active' : ''}>
//                                 <td>{user.email.split('@')[0]}</td>
//                                 <td>{user.name}</td>
//                                 <td>
//                                     <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;
//----------------

//highight user

import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

const UserManagement = () => {
    // State for managing user data
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
    const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
    const [currentLoginUser, setCurrentLoginUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
    const [password, setPassword] = useState(localStorage.getItem('userPassword') || '');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Effect to update user data in local storage
    useEffect(() => {
        localStorage.setItem('useryoutube', JSON.stringify(userData));
    }, [userData]);

   // Function to handle user login
const handleLogin = () => {
    let user;
    let isPasswordMatch = false;

    // Find the user with the entered email
    const userWithEmail = userData.find(u => u.email === email);

    if (userWithEmail) {
        // Check if the password matches the plain text password
        if (userWithEmail.password === password) {
            isPasswordMatch = true;
        } else {
            // Check if the password is encrypted
            const encryptedPassword = passwords[email];
            if (encryptedPassword) {
                const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret');
                const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                if (decryptedPassword === password) {
                    isPasswordMatch = true;
                }
            }
        }
    }

    // Handle login based on whether the email and password match
    if (userWithEmail && isPasswordMatch) {
        user = userWithEmail;
    }

    // Perform login or show error message
    if (user) {
        setCurrentLoginUser(user.email);
        setIsLoggedIn(true);
    } else {
        alert('Invalid email or password');
    }
};


    // Function to handle user logout
    const handleLogout = () => {
        setCurrentLoginUser('');
        setIsLoggedIn(false);
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
            localStorage.setItem('userEmail', value);
        } else if (name === 'password') {
            setPassword(value);
            localStorage.setItem('userPassword', value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    // Function to handle updating password
    const handleUpdatePassword = () => {
        if (newPassword === confirmPassword) {
            const encryptedPassword = CryptoJS.AES.encrypt(newPassword, 'secret').toString();
            const decryptedPassword = newPassword; // Store plain text password
            const updatedPasswords = { ...passwords, [currentLoginUser]: encryptedPassword };
            setPasswords(updatedPasswords);
            localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
            console.log('Updated password:', decryptedPassword); // Log updated password
            localStorage.setItem('updated_password', decryptedPassword); // Store plain text password in local storage
            alert('Password updated successfully');
        } else {
            alert('Passwords do not match');
        }
    };

    // Function to handle deleting user account
    const handleDeleteAccount = () => {
        const filteredUserData = userData.filter(user => user.email !== currentLoginUser);
        setUserData(filteredUserData);
        localStorage.setItem('useryoutube', JSON.stringify(filteredUserData));
        setCurrentLoginUser('');
        setIsLoggedIn(false);
        alert('Account deleted successfully');
    };

    // Function to handle duplicating user
    const handleDuplicate = (index) => {
        const updatedUserData = [...userData];
        const user = updatedUserData[index];

        // Duplicate the user
        const [name, domain] = user.email.split('@');
        const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
        const duplicatedUser = { ...user, email: duplicateEmail };
        setUserData([...userData, duplicatedUser]);
    };

    return (
        <div className="container mt-3 bg-warning">
            <h3 className='text-center'>User Management</h3>
            <div className="text-center mb-3">
                {!isLoggedIn ? (
                    <>
                        <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
                        <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
                        <button className="btn btn-success" onClick={handleLogin}>Login</button>
                    </>
                ) : (
                    <>
                        <p>Logged in as: {currentLoginUser}</p>
                        <div className="mb-2">
                            <input type="password" name="newPassword" value={newPassword} onChange={handleInputChange} placeholder="New Password" />
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} placeholder="Confirm New Password" />
                            <button className="btn btn-primary ml-2" onClick={handleUpdatePassword}>Update Password</button>
                        </div>
                        <button className="btn btn-danger mr-2" onClick={handleDeleteAccount}>Delete Account</button>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
            {isLoggedIn && (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={index} className={user.email === currentLoginUser ? 'table-active bg-success' : ''}>
                                <td>{user.email.split('@')[0]}</td>
                                <td>{user.name}</td>
                                <td>
                                    <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserManagement;







































































