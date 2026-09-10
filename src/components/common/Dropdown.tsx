'use client';

import { IconCheck, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useEffect, useId, useRef, useState } from 'react';
import { Dropdown as DropdownType, Tab } from '~/shared/types';

const Dropdown = ({ options, activeTab, onActiveTabSelected, iconUp, iconDown }: DropdownType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[activeTab].link?.label as string);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const dropdownHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onOptionSelected = (option: Tab, index: number) => {
    setSelectedOption(option.link?.label as string);
    setIsDropdownOpen(false);
    triggerRef.current?.focus();

    // Sends the value to the parent component
    onActiveTabSelected(index);
  };

  useEffect(() => {
    const handler = () => setIsDropdownOpen(false);

    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  // Escape cierra el menú y devuelve el foco al disparador.
  useEffect(() => {
    if (!isDropdownOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isDropdownOpen]);

  return (
    <div className="relative mt-4 rounded-md border border-gray-400 text-left">
      <button
        type="button"
        ref={triggerRef}
        onClick={dropdownHandler}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer select-none items-center justify-between rounded-md p-3"
      >
        <span className="text-lg">{selectedOption}</span>
        {iconDown && iconUp ? (
          isDropdownOpen === false ? (
            iconDown
          ) : (
            iconUp
          )
        ) : isDropdownOpen === false ? (
          <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
        ) : (
          <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
        )}
      </button>
      {isDropdownOpen && (
        <ul
          id={panelId}
          onClick={(e) => e.stopPropagation()}
          className="absolute w-full translate-y-1 overflow-auto rounded-md border border-gray-400"
        >
          {options.map((option: Tab, index) => (
            <li key={`option-${index}`}>
              <button
                type="button"
                onClick={() => onOptionSelected(option, index)}
                aria-current={activeTab === index}
                className={`flex w-full cursor-pointer items-center bg-white p-3 text-left text-lg dark:bg-slate-900 ${
                  activeTab !== index ? 'pl-10' : 'text-primary-600 dark:text-primary-200'
                }`}
              >
                {activeTab === index && <IconCheck className="mr-2 h-5 w-5" />} {option.link?.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
