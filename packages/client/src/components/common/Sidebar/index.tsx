import React from 'react';
import loadable from '@loadable/component';
import { DocumentIcon, TrashIcon, ArchiveIcon, TagIcon } from '@heroicons/react/outline';

import { SidebarProps } from './types';
import { SidebarContainer, SidebarEnd, SidebarItem } from './style';
import { Link } from 'react-router-dom';

const Container = loadable(() => import('../../../ui/Container'));

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
  const items = [
    {
      path: `/dash`,
      label: 'Notes',
      icon: <DocumentIcon className="icon" />,
    },
    {
      path: 'tags/id',
      label: 'Labels',
      icon: <TagIcon className="icon" />,
    },
    {
      path: `/notes/id/archives`,
      label: 'Archives',
      icon: <ArchiveIcon className="icon" />,
    },
    {
      path: `notes/id/trash`,
      label: 'Trash',
      icon: <TrashIcon className="icon" />,
    },
  ];

  return (
    <SidebarContainer className={`${show && 'show'}`}>
      <Container style={{ flexDirection: 'column', gridGap: '10px', display: 'flex' }}>
        {items.map((val, index) => (
          <Link to={val.path} key={index}>
            <SidebarItem>
              {val.icon}
              <span className="text">{val.label}</span>
            </SidebarItem>
          </Link>
        ))}
      </Container>
      <SidebarEnd>Copyright &copy; 2022 SolidNotes</SidebarEnd>
    </SidebarContainer>
  );
};

export default Sidebar;
