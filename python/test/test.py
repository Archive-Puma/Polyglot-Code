import os
import sys
lib_path = os.path.abspath(os.path.join(__file__, '..', '..', 'lib'))
sys.path.append(lib_path)

import polyglot

def test():
  printf("C\n")
  cout << "C++\n"
  IO.write("Elixir\n")
  fmt.Print("Go\n")
  fmt.Printf("Go\n")
  putStr("Haskell\n")
  System.out.printf("Java\n")
  io.write("Lua\n")
  fprintf("Matlab\n")
  write("Pike\n")
  System.Console.Write("VB.NET\n")

  print
  trace("ActionScript")
  Ada.Text_IO.Put_Line("Ada")
  WriteF("AmigaE")
  Response.Write("ASP")
  putchar("B")
  puts("C")
  Console.println("C#")
  Console.WriteLine("C#")
  cout << "C++" << endl
  Qout("Clipper")
  writeln("D")
  std.stdio.writeln("D")
  Writeln("Delphi")
  IO.puts("Elixir")
  fmt.Println("Go")
  putStrLn("Haskell")
  System.out.println("Java")
  console.log("JavaScript")
  println("Kotlin")
  Print["Mathematica"]
  disp("Matlab")
  echo("Nim")
  NSLog("Objetive-C")
  writeln("Pascal")
  writeln("Pike")
  PrintN("PureBasic")
  p("Ruby")
  Debug.Log("Unity3D")
  System.Console.WriteLine("VB.NET")

if __name__ == '__main__':
  test()