import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import MenuData from './menuData';

export function MenuBar() {

    const menuItems = MenuData.map((item => 
                  <Menu.Item>
                    {item.title}

                    
                  </Menu.Item>
        ))
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems}

      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuBar;
