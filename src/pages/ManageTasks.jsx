import React, { useEffect, useState } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective, Kanban } from '@syncfusion/ej2-react-kanban';

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { kanbanGrid, getTeamTasks } from '../data/dummy';
import { Header } from '../components';

import TaskForm from '../components/TaskForm';
import { useStateContext } from '../contexts/ContextProvider';

const ManageTasks = () => {
  const [kanbanData, setKanbanData] = useState();
  const { user } = useStateContext();

  useEffect(() => {
    getTeamTasks(user)
      .then((res) => {
        const data = res.map((item, i) => {
          let { status } = item;
          if (item.status === 'Completed') {
            status = 'Close';
          } else if (item.status === 'InReview') {
            status = 'Testing';
          } else if (item.status === 'Inprogress') {
            status = 'InProgress';
          } else if (item.status === 'ToDo') {
            status = 'Open';
          }

          return {
            Id: item.name,
            Title: item._id,
            Status: status,
            Summary: item.description,
            Priority: item.priority,
            Assignee: item.assignedTo.firstName,
          };
        });
        setKanbanData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [boxStatus, setBoxStatus] = React.useState({ hideDialog: false });
  function onOverlayClick() {
    setBoxStatus({ hideDialog: false });
  }
  function dialogClose() {
    setBoxStatus({ hideDialog: false });
  }
  function handleClick() {
    setBoxStatus({ hideDialog: true });
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <div className="App" id="dialog-target">
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles,react/button-has-type */}
        <button className="e-control e-btn" id="targetButton1" role="button" onClick={handleClick.bind(this)}>Open</button>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <DialogComponent content={TaskForm} isModal target="#dialog-target" visible={boxStatus.hideDialog} close={dialogClose} overlayClick={onOverlayClick} />
      </div>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        swimlaneSettings={{ keyField: 'Assignee' }}
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default ManageTasks;

