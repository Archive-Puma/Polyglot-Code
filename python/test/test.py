import os
import sys
import unittest
lib_path = os.path.abspath(os.path.join(__file__, '..', '..', 'lib'))
sys.path.append(lib_path)

import polyglot

class TestPolyglotCode(unittest.TestCase):
  def test_print(self):
    self.assertRaises(printf("C\n"))
    self.assertRaises(cout << "C++\n")
    self.assertRaises(IO.write("Elixir\n"))
    self.assertRaises(fmt.Print("Go\n"))
    self.assertRaises(fmt.Printf("Go\n"))
    self.assertRaises(putStr("Haskell\n"))
    self.assertRaises(System.out.printf("Java\n"))
    self.assertRaises(io.write("Lua\n"))
    self.assertRaises(fprintf("Matlab\n"))
    self.assertRaises(write("Pike\n"))
    self.assertRaises(System.Console.Write("VB.NET\n"))
    

  def test_println(self):
    print
    self.assertRaises(trace("ActionScript"))
    self.assertRaises(Ada.Text_IO.Put_Line("Ada"))
    self.assertRaises(WriteF("AmigaE"))
    self.assertRaises(Response.Write("ASP"))
    self.assertRaises(putchar("B"))
    self.assertRaises(puts("C"))
    self.assertRaises(Console.println("C#"))
    self.assertRaises(Console.WriteLine("C#"))
    self.assertRaises(cout << "C++" << endl)
    self.assertRaises(Qout("Clipper"))
    self.assertRaises(writeln("D"))
    self.assertRaises(std.stdio.writeln("D"))
    self.assertRaises(Writeln("Delphi"))
    self.assertRaises(IO.puts("Elixir"))
    self.assertRaises(fmt.Println("Go"))
    self.assertRaises(putStrLn("Haskell"))
    self.assertRaises(System.out.println("Java"))
    self.assertRaises(console.log("JavaScript"))
    self.assertRaises(println("Kotlin"))
    self.assertRaises(Print["Mathematica"])
    self.assertRaises(disp("Matlab"))
    self.assertRaises(echo("Nim"))
    self.assertRaises(NSLog("Objetive-C"))
    self.assertRaises(writeln("Pascal"))
    self.assertRaises(writeln("Pike"))
    self.assertRaises(PrintN("PureBasic"))
    self.assertRaises(p("Ruby"))
    self.assertRaises(Debug.Log("Unity3D"))
    self.assertRaises(System.Console.WriteLine("VB.NET"))

if __name__ == "__main__":
  unittest.main()



