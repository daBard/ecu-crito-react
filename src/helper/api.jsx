import React, { useState, useEffect } from 'react';

export async function getData() {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    const data = await result.json()
    return data
}

export function other() {
    console.log('Din mamma')
    return "Ditt blåbär"
}