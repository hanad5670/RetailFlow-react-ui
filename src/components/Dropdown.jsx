import { Fragment, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu, Transition } from '@headlessui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  const names = ['Alice', 'John', 'Bart', 'Squidward'];
  const [selected, setSelected] = useState(names[0]);

  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <Menu as="div" className="relative inline-block text-left">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <div>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selected}
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <div className="py-1">
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  )}
                  onClick={() => setSelected(names[0])}
                >
                  {names[0]}
                </a>
              )}
            </Menu.Item>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  )}
                  onClick={() => setSelected(names[1])}
                >
                  {names[1]}
                </a>
              )}
            </Menu.Item>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  )}
                  onClick={() => setSelected(names[2])}
                >
                  {names[2]}
                </a>
              )}
            </Menu.Item>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <form>
              {/* eslint-disable-next-line react/react-in-jsx-scope */}
              <Menu.Item>
                {({ active }) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                    onClick={() => setSelected(names[3])}
                  >
                    {names[3]}
                  </a>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
