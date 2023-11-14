import React from 'react';
import { FC, useState } from 'react';
import { Listbox } from '@headlessui/react';
import Image from 'next/image';

import { CustomTransition, Text } from '@/components/lips';
import { getListboxOptionsClassName } from '@/components/lips/customSelect/helpers/getListboxOptionsClassName';
import { getTextClassName } from '@/components/lips/customSelect/helpers/getTextClassName';

import { getIconArrows } from '../helpers/getIconArrows';
import { getListBoxClassName } from '../helpers/getListBoxClassName';

import { DirectionType } from './interfaces/DirectionType';
import { ISelectItem } from './interfaces/ISelectItem';

import styles from './styles.module.scss';

export interface ISelectProps {
  options: ISelectItem[];
  direction?: DirectionType;
  className?: string;
}

const Select: FC<ISelectProps> = ({
  options,
  direction = 'up',
  className,
}): JSX.Element => {
  const [selected, setSelected] = useState<ISelectItem | undefined>(options[0]);

  return (
    <div className={className}>
      <Listbox
        value={selected}
        onChange={setSelected}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              defaultChecked
              defaultValue={1}
              autoFocus
              className={styles.iconsWrapper}
            >
              {selected && (
                <div className={styles.iconsContainer}>
                  {selected.icon && (
                    <Image
                      className={styles.iconFlag}
                      src={selected.icon}
                      alt="flag"
                    />
                  )}
                  <Text size="base">{selected.text}</Text>
                </div>
              )}
              <Image
                className={styles.iconArrows}
                src={getIconArrows(open)}
                alt="arrow"
              />
            </Listbox.Button>
            <CustomTransition
              className={styles.position}
              show={open}
            >
              <Listbox.Options
                static
                className={getListboxOptionsClassName(direction)}
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    value={option}
                    className={getListBoxClassName(options, option.id)}
                  >
                    {option.icon && (
                      <Image
                        className={styles.iconFlag}
                        src={option.icon}
                        alt="flag"
                      />
                    )}
                    <Text
                      size="base"
                      className={getTextClassName({ option, selected })}
                    >
                      {option.text}
                    </Text>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </CustomTransition>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
