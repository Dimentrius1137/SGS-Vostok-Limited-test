SELECT '{"id": ' + CAST(id AS VARCHAR(30)) + ',
		"container_number": ' + CAST(container_number AS VARCHAR(30)) + ',
        "container_type": ' + CAST(container_type AS VARCHAR(30)) + ',
        "container_length": ' + CAST(container_length AS VARCHAR(30)) + ',
        "container_width": ' + CAST(container_width AS VARCHAR(30)) + ',
        "container_width": ' + CAST(containerH_height AS VARCHAR(30)) + ',
        "container_empty": ' + CASE container_empty 
        					WHEN 0 THEN 'false' 
                            WHEN NULL THEN 'false' 
                            WHEN 1 THEN 'true' END + ', }' FROM Containers;
