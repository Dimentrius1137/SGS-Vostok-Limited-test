SELECT '{"id": ' + CAST(Operations.id AS VARCHAR(20)) +', 
          "containerid": '+ CAST(containerid AS VARCHAR(20)) +',
          "start_operation_date": '+ CAST(start_operation_date AS VARCHAR(20))+',
          "end_operation_date": '+ CAST(end_operation_date as VARCHAR(20)) +',
          "operation_type": "'+ operation_type +'",
          "operator_fio": "'+ operator_fio +'",
          "inspection_place": "'+ inspection_place +'" }'
FROM Operations 
LEFT JOIN Containers
ON Operations.containerId = Containers.id 
WHERE Containers.container_empty = 1;
