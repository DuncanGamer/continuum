import { useState } from 'react';

const MyAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className=" h-screen container mx-auto  bg-white rounded-lg shadow-lg">
      <div className="px-6  py-4">
        <h2 className="text-2xl mt-80 font-bold mb-2">My Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input
              className="hidden"
              id="avatar"
              type="file"
              accept="image/*"
              onChange={(event) => setAvatar(event.target.files[0])}
            />
            <div className="flex items-center justify-between">
              <div>
                {avatar ? (
                  <span>{avatar.name}</span>
                ) : (
                  <span className="text-sm text-gray-500">Select a file</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="avatar"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Upload
                </label>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    );
};

export default MyAccount;
