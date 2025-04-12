CREATE TABLE Containers (
	id INT PRIMARY KEY IDENTITY,
    container_number INT,
    container_type VARCHAR(20),
    container_length INT,
    container_width INT,
    containerH_height INT,
    container_weight INT,
    container_empty BIT,
    entry_date DATETIME    
);

CREATE TABLE Operations (
	id INT PRIMARY KEY IDENTITY,
  	containerId INT REFERENCES Containers(id),
    start_operation_date DATETIME,
  	end_operation_date DATETIME,
   	operation_type VARCHAR(20),
  	operator_FIO VARCHAR(50),
  	inspection_place VARCHAR(30)
);
