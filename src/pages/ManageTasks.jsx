import React, {useEffect, useState} from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective, Kanban } from '@syncfusion/ej2-react-kanban';

import { kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { getTeamTasks } from '../data/dummy';


const ManageTasks = () => {
  const [kanbanData, setKanbanData] = useState()

  useEffect(() => {
    getTeamTasks()
      .then((res) => {
        const data = res.map((item, i) => {
          let status = item.status;
          if (item.status === 'Completed') {
            status = 'Close';
          }else if(item.status === 'InReview'){
            status = 'Testing';
          }else if(item.status === 'Inprogress'){
            status = 'InProgress';
          }else if(item.status === 'ToDo'){
            status = 'Open';
          }

          return {
            Id: item.name,
            Title: item._id,
            Status: status,
            Summary: item.description,
            Priority: item.priority,
            Assignee: item.assignedTo.firstName,
           }
         })
        //  console.log(data)
         setKanbanData(data)
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
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
  </div>)
};

export default ManageTasks;
