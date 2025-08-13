package com.example._250813_react_practice_todolist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoStatsDto {
    private long total;
    private long completed;
    private long pending;
}
