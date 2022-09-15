import { Menu, Button, Text } from '@mantine/core';
import MenuData from './menuData';

export function MenuBar() {

    const menuItems = MenuData.map((item => 
                  <Menu.Item>
                    {item.title}
                    Test
                  
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
